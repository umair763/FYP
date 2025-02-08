import React from 'react';

function LastEditied() {
   return (
      <div className="bg-white rounded-xl shadow-custom p-6 w-full flex items-start">
         {' '}
         {/* Card container */}
         {/* Left side: Image */}
         <div className="w-24 h-24 rounded-lg overflow-hidden mr-4">
            {' '}
            {/* Image container */}
            <img
               src="./src/assets/images/SIGN.png" // Replace with your image URL
               alt="Edit Preview"
               className="object-cover w-full h-full"
            />
         </div>
         {/* Right side: Text content */}
         <div className="flex-grow">
            <div className="flex items-center justify-between mb-2">
               {' '}
               {/* Title and Icon container */}
               <h3 className="text-lg font-semibold text-gray-800">Last Edited</h3>
               <button className="text-gray-500 hover:text-gray-700">
                  {' '}
                  {/* Edit Icon Button */}
                  {/* Replace with your icon SVG or component */}
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                     className="h-6 w-6" // Apply any external classes here
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7" // Adjusted path for top-right arrow
                     />
                  </svg>
               </button>
            </div>

            <div className="bg-blue-100 text-blue-500 rounded-md px-2 py-1 text-sm font-medium inline-block mb-2">
               INSTAGRAM
            </div>

            <p className="text-gray-800">Want to save time and increase your productivity?</p>
         </div>
      </div>
   );
}

export default LastEditied;
