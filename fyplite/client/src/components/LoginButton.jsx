// LoginButton.jsx
import React from 'react';
import { useAuth } from './AuthContext';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const LoginButton = () => {
   const { login } = useAuth();

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
               headers: {
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': 'http://localhost:5173',
               },
               withCredentials: true,
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

   const handleLoginError = (error) => {
      console.error('Login Failed:', error);
   };

   return (
      <div>
         <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={handleLoginError}
            useOneTap
            cookiePolicy="single_host_origin"
            uxMode="popup"
         />
      </div>
   );
};

export default LoginButton;
