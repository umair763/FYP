import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import { motion } from 'framer-motion';

const transitionVariants = {
   initial: { opacity: 0, x: 100 },
   animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
   exit: { opacity: 0, x: -50, transition: { duration: 0.8 } },
};

const sidebarVariants = {
   initial: { x: '-100%', opacity: 1 },
   animate: { x: '0%', opacity: 1, transition: { duration: 0.8 } },
   exit: { x: '100%', opacity: 1, transition: { duration: 0.8 } },
};

function Signin() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const navigate = useNavigate();
   const { setIsAuthenticated, setUser } = useContext(AuthContext);

   const handleSubmit = (e) => {
      e.preventDefault();

      const storedUser = localStorage.getItem('user');

      if (storedUser) {
         const user = JSON.parse(storedUser);

         if (user.email === email && user.password === password) {
            setUser(user); // Set user data in context
            setIsAuthenticated(true);
            navigate('/');
         } else {
            alert('Invalid credentials');
         }
      } else {
         alert('User not found. Please sign up.');
      }
   };

   return (
      <motion.div
         className="flex flex-col md:flex-row h-screen w-full"
         initial="initial"
         animate="animate"
         exit="exit"
         variants={transitionVariants}
      >
         {/* Left Side - Sign In Form */}
         <div className="flex flex-col justify-center items-center p-6 bg-white w-full md:w-1/2 h-full">
            <h2 className="text-3xl font-bold text-purple-700">Sign in</h2>
            <p className="text-gray-500 mt-1">Welcome to SocialSight</p>
            <form
               className="w-full max-w-xs md:max-w-sm lg:max-w-md mt-4 md:mt-6 space-y-3 md:space-y-4 flex flex-col items-center"
               onSubmit={handleSubmit}
            >
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
                  className="w-1/2 bg-purple-600 cursor-pointer hover:bg-purple-700 text-white font-bold py-3 rounded-full"
               >
                  SIGN IN
               </button>
            </form>
            <p className="mt-4 text-gray-600 ">
               New to SocialSight? &nbsp;
               <span
                  className="text-purple-600 cursor-pointer hover:underline w-1/2 rounded-full py-2 text-center"
                  onClick={() => navigate('/signup')}
               >
                  Sign up
               </span>
            </p>
         </div>

         {/* Right Side - Illustration */}
         <motion.div
            className="flex flex-col justify-center items-center bg-gradient-to-b from-purple-300 to-white p-6 text-center w-full md:w-1/2 h-full"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={sidebarVariants}
         >
            <div className="flex flex-col justify-center items-center p-6 text-center">
               <h1 className="text-2xl md:text-3xl font-bold text-purple-700">Welcome to SocialSight!</h1>
               <p className="mt-2 text-gray-600 font-semibold">
                  Sign in to manage, schedule, and analyze your social media effortlessly.
               </p>
               <ul className="text-gray-600 text-left mt-4">
                  <li>✅ Access AI-powered insights and analytics to track performance.</li>
                  <li>✅ Monitor audience sentiment and engagement in real-time.</li>
                  <li>✅ Optimize your strategy with data-driven recommendations.</li>
               </ul>
               <img
                  src="./src/assets/images/SIGN 2.png"
                  alt="Illustration"
                  className="mt-7 w-3/4 h-auto object-contain mx-auto mb-4"
               />
            </div>
         </motion.div>
      </motion.div>
   );
}

export default Signin;
