// server.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { OAuth2Client } = require("google-auth-library");
const app = express();
const port = process.env.PORT || 5000;

// Middleware to handle CORS
app.use(
	cors({
		origin: "http://localhost:5173",
		methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
		allowedHeaders: ["Content-Type", "Authorization"],
		credentials: true,
	})
);

// Remove security headers that interfere with CORS
app.use((req, res, next) => {
	res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
	res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
	next();
});

app.use(express.json());

// Initialize the Google OAuth client
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID); // Ensure GOOGLE_CLIENT_ID is in your .env file

// Route to verify the Google token
app.post("/api/auth/google", async (req, res) => {
	const { token } = req.body; // Token sent from the frontend (Google ID Token)

	if (!token) {
		return res.status(400).json({ message: "Token is required" });
	}

	try {
		// Verify the token using the Google OAuth2Client
		const ticket = await client.verifyIdToken({
			idToken: token,
			audience: process.env.GOOGLE_CLIENT_ID, // Your Google OAuth client ID
		});

		// Get the user data from the verified token
		const payload = ticket.getPayload();

		const { email, name, picture, sub: userId } = payload;

		// You can store user data in your database here or create a session
		// For now, we return the user data
		res.status(200).json({
			email,
			name,
			picture,
			userId,
		});
	} catch (error) {
		console.error("Error:", error);
		res.status(500).json({
			message: error.message || "Internal server error",
			stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
		});
	}
});

// Start the server
app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
