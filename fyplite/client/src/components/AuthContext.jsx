import React, { createContext, useContext, useState } from 'react';

// Create the AuthContext
const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);

   // Google login function
   const login = (userData) => {
      setUser(userData); // Store the user data in the context
   };

   // Logout function
   const logout = () => {
      setUser(null); // Clear user data from the context
   };

   return (
      <AuthContext.Provider value={{ user, login, logout }}>
         <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">{children}</div>
         </div>
      </AuthContext.Provider>
   );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
