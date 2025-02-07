import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
   const [username, setUsername] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [profileImage, setProfileImage] = useState(null);
   const navigate = useNavigate();

   const handleImageUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
         const reader = new FileReader();
         reader.onloadend = () => {
            setProfileImage(reader.result);
         };
         reader.readAsDataURL(file);
      }
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (username && email && password) {
         const user = { username, email, password, profileImage };
         localStorage.setItem('user', JSON.stringify(user));
         navigate('/signin');
      }
   };

   return (
      <div className="flex flex-col md:flex-row h-screen w-full">
         {/* Left Side - Image and Text */}
         <div className="md:w-1/2 flex flex-col justify-center items-center bg-gradient-to-b from-purple-300 to-white p-6 text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-purple-700 mt-4">Welcome to SocialSight!</h1>
            <p className="mt-2 text-gray-600 font-semibold">
               Sign in to manage, schedule, and analyze your social media effortlessly.
            </p>
            <ul className="text-gray-600 text-sm mt-4 space-y-2">
               <li>✔️ Access AI-powered insights and analytics to track performance.</li>
               <li>✔️ Monitor audience sentiment and engagement in real-time.</li>
               <li>✔️ Optimize your strategy with data-driven recommendations.</li>
            </ul>
            <img src="./src/assets/images/SIGN.png" alt="Illustration" className="w-3/4 h-auto object-contain" />
         </div>

         {/* Right Side - Signup Form */}
         <div className="md:w-1/2 flex flex-col justify-center items-center p-6">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-700">Sign Up</h2>
            <p className="text-gray-500 mt-1">Create an account at SocialSight</p>
            <div className="relative mt-4 w-24 h-24 flex justify-center items-center border-4 border-purple-300 rounded-full overflow-hidden">
               {profileImage ? (
                  <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
               ) : (
                  <span className="text-4xl">👤</span>
               )}
               <label className="absolute bottom-0 right-0 bg-purple-600 text-white p-1 rounded-full cursor-pointer z-10">
                  📷
                  <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
               </label>
            </div>
            <form className="w-full max-w-sm mt-6 space-y-4" onSubmit={handleSubmit}>
               <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 border rounded-lg focus:outline-purple-500"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
               />
               <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border rounded-lg focus:outline-purple-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
               <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-3 border rounded-lg focus:outline-purple-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
               <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg"
               >
                  SIGN UP
               </button>
            </form>
            <button className="mt-4 text-purple-600 hover:underline" onClick={() => navigate('/signin')}>
               Already have an account? Sign In
            </button>
         </div>
      </div>
   );
};

export default SignUp;
