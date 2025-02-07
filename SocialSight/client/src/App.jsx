import { useState, React } from 'react';

function App() {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();

      // Basic validation (you'll want more robust validation in a real app)
      if (!username || !password) {
         setError('Username and password are required.');
         return;
      }

      // Here you would typically make an API call to authenticate the user
      // For this example, we'll just simulate a successful login
      console.log('Logging in with:', username, password);

      // Simulate success (replace with actual authentication logic)
      if (username === 'testuser' && password === 'password') {
         // Redirect or update state to indicate successful login
         alert('Login Successful!'); // Replace with your logic
      } else {
         setError('Invalid username or password.');
      }
   };

   return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
         <div className="bg-white p-8 rounded shadow-md w-96">
            <h2 className="text-2xl font-bold mb-4">Login</h2>

            {error && <p className="text-red-500 mb-4">{error}</p>}

            <form onSubmit={handleSubmit}>
               <div className="mb-4">
                  <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
                     Username
                  </label>
                  <input
                     type="text"
                     id="username"
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
                     placeholder="Enter your username"
                     required
                  />
               </div>
               <div className="mb-6">
                  <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                     Password
                  </label>
                  <input
                     type="password"
                     id="password"
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     placeholder="Enter your password"
                     required
                  />
               </div>
               <div className="flex items-center justify-between">
                  <button
                     type="submit"
                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                     Sign In
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
}

export default App;
