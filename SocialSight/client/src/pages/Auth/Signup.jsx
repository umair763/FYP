import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
   const [username, setUsername] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const navigate = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();

      if (username && email && password) {
         const user = { username, email, password };
         localStorage.setItem('user', JSON.stringify(user));
         navigate('/signin'); // Redirect to SignIn page after successful signup
      }
   };

   return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
         <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
            <h2 className="text-xl font-bold mb-4">Signup</h2>
            <input
               type="text"
               value={username}
               onChange={(e) => setUsername(e.target.value)}
               className="w-full p-2 mb-4 border rounded"
               placeholder="Username"
            />
            <input
               type="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               className="w-full p-2 mb-4 border rounded"
               placeholder="Email"
            />
            <input
               type="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               className="w-full p-2 mb-4 border rounded"
               placeholder="Password"
            />
            <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded">
               Signup
            </button>
            <div className="mt-4">
               <p>
                  Already have an account?{' '}
                  <button onClick={() => navigate('/signin')} className="text-blue-500">
                     Sign In
                  </button>
               </p>
            </div>
         </form>
      </div>
   );
}

export default Signup;
