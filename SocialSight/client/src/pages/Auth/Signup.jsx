import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const transitionVariants = {
   initial: { opacity: 0, x: -100 },
   animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
   exit: { opacity: 0, x: 50, transition: { duration: 0.8 } },
};

const sidebarVariants = {
   initial: { x: '100%', opacity: 1 },
   animate: { x: '0%', opacity: 1, transition: { duration: 0.8 } },
   exit: { x: '100%', opacity: 1, transition: { duration: 0.8 } },
};

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
      <motion.div
         className="flex flex-row h-screen w-full overflow-hidden"
         initial="initial"
         animate="animate"
         exit="exit"
         variants={transitionVariants}
      >
         {/* Left Side - Illustration */}
         <motion.div
            className="md:w-1/2 flex flex-col justify-center items-center bg-gradient-to-b from-purple-300 to-white p-6 text-center"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={sidebarVariants}
         >
            <h1 className="text-2xl md:text-3xl font-bold text-purple-700 mt-4">
               SocialSight’s AI-Powered Social Media Assistant
            </h1>
            <p className="mt-2 text-gray-600 font-semibold">
               <span className="font-bold">
                  Create, Analyze performance, and track audience sentiment—all in one place.
               </span>
               Tailored insights and smart automation for effortless social media management.
            </p>
            <img src="./src/assets/images/SIGN.png" alt="Illustration" className="w-3/4 h-auto object-contain" />
         </motion.div>

         {/* Right Side - Signup Form */}
         <div className="md:w-1/2 flex flex-col justify-center items-center p-6 relative">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-700">Create Account</h2>
            <p className="text-gray-500 mt-1">Sign up at SocialSight</p>
            <div className="relative mt-4 w-24 h-24 flex justify-center items-center border-4 border-purple-300 rounded-full overflow-hidden">
               {profileImage ? (
                  <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
               ) : (
                  <span className="text-4xl">👤</span>
               )}
               <label className="absolute bottom-0 right-0 bg-purple-600 text-white p-2 rounded-full cursor-pointer shadow-lg z-10">
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
            <button className="mt-4 text-gray-700 " onClick={() => navigate('/signin')}>
               Already have an account? <span className="hover:underline text-purple-600 cursor-pointer">Sign In</span>
            </button>
         </div>
      </motion.div>
   );
};

export default SignUp;
