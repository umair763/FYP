import React from 'react';
import { useAuth } from './AuthContext';

const UserProfile = () => {
   const { user, logout } = useAuth();

   if (!user) {
      return <div className="text-center mt-10 text-red-500">Please log in.</div>;
   }

   return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
         <h2 className="text-2xl font-bold mb-4">User Profile</h2>
         <p className="mb-2">
            <span className="font-semibold">Name:</span> {user.name}
         </p>
         <p className="mb-4">
            <span className="font-semibold">Email:</span> {user.email}
         </p>
         <button onClick={logout} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            Logout
         </button>
      </div>
   );
};

export default UserProfile;
