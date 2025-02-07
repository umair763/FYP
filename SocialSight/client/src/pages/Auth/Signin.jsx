import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
      <motion.div
         className="flex flex-col md:flex-row h-screen w-full"
         initial="initial"
         animate="animate"
         exit="exit"
         variants={transitionVariants}
      >
         <div className="flex flex-col md:flex-row h-screen w-full">
            {/* Left Side - Sign In Form */}
            <div className="md:w-1/2 flex flex-col justify-center items-center p-6 bg-white">
               <h2 className="text-3xl font-bold text-purple-700">Sign in</h2>
               <p className="text-gray-500 mt-1">Welcome to SocialSight</p>
               <form className="w-full max-w-sm mt-6 space-y-4">
                  <input
                     type="email"
                     placeholder="Email Address"
                     className="w-full p-3 border rounded-lg focus:outline-purple-500"
                  />
                  <input
                     type="password"
                     placeholder="Password"
                     className="w-full p-3 border rounded-lg focus:outline-purple-500"
                  />
                  <button
                     type="submit"
                     className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg"
                  >
                     SIGN IN
                  </button>
               </form>
               <p className="mt-4 text-gray-600 ">
                  New to SocialSight? &nbsp;
                  <span className="text-purple-600 cursor-pointer hover:underline" onClick={() => navigate('/signup')}>
                     Sign up
                  </span>
               </p>
            </div>
         </div>

         {/* Right Side - Illustration */}
         <motion.div
            className="md:w-1/2 flex flex-col justify-center items-center bg-gradient-to-b from-purple-300 to-white p-6 text-center absolute right-0 top-0 h-full "
            initial="initial"
            animate="animate"
            exit="exit"
            variants={sidebarVariants}
         >
            <div className=" flex flex-col justify-center items-center p-6 text-center">
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
