import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signin() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const navigate = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();
      const user = JSON.parse(localStorage.getItem('user'));

      if (user && user.email === email && user.password === password) {
         navigate('/'); // Redirect to Dashboard on successful signin
      } else {
         alert('Invalid credentials');
      }
   };

   return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
         <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
            <h2 className="text-xl font-bold mb-4">Sign In</h2>
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
               Sign In
            </button>
            <div className="mt-4">
               <p>
                  Don't have an account?{' '}
                  <button onClick={() => navigate('/signup')} className="text-blue-500">
                     Sign Up
                  </button>
               </p>
            </div>
         </form>
      </div>
   );
}

export default Signin;
