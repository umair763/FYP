// App.jsx
import React from 'react';
import { AuthProvider } from './components/AuthContext';
import LoginButton from './components/LoginButton';
import UserProfile from './components/UserProfle';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css';

const App = () => {
   return (
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
         <AuthProvider>
            <div className="p-6 flex flex-col items-center justify-center bg-gray-100">
               <h1 className="text-4xl font-bold mb-4">Welcome to the App</h1>
               <div className="space-y-4">
                  <LoginButton />
                  <UserProfile />
               </div>
            </div>
         </AuthProvider>
      </GoogleOAuthProvider>
   );
};

export default App;
