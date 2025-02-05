import React from 'react';
import { useAuth } from './AuthContext';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios'; // Import axios for making HTTP requests
import UserProfile from './UserProfle';

const LoginButton = () => {
   const { login } = useAuth();

   // LoginButton.jsx (updated)
   const handleLoginSuccess = async (response) => {
      if (!response?.credential) {
         console.error('No credential received');
         return;
      }

      try {
         const res = await axios.post(
            'http://localhost:5000/api/auth/google',
            { token: response.credential },
            {
               headers: { 'Content-Type': 'application/json' },
               withCredentials: true, // Add this
            }
         );

         if (res.data?.email) {
            login(res.data);
         } else {
            console.error('Invalid response format:', res);
         }
      } catch (error) {
         console.error('Login error:', {
            message: error.message,
            code: error.code,
            response: error.response?.data,
         });
      }
   };

   const handleLoginError = () => {
      console.log('Login Failed');
   };

   return (
      <div>
         <GoogleLogin onSuccess={handleLoginSuccess} onError={handleLoginError} useOneTap />
      </div>
   );
};

export default LoginButton;
