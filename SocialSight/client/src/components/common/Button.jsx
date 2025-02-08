// src/components/Button.jsx (Reusable Button Component)
import React from 'react';

function Button({ children, onClick, variant = 'primary', ...props }) {
   const buttonStyles = {
      primary: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
      secondary: 'bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded',
      danger: 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded',
      // Add more variants as needed
   };

   return (
      <button
         onClick={onClick}
         className={`${buttonStyles[variant] || buttonStyles.primary} ${props.className || ''}`} // Apply styles and any additional classes
         {...props} // Spread any other props (e.g., type, disabled)
      >
         {children} {/* The text inside the button */}
      </button>
   );
}

export default Button;
