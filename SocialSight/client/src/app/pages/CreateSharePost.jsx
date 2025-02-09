import { useState } from 'react';

function CreateSharePost() {
   return (
      <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
         {/* Main container */}
         {/* Left Column */}
         <div className="md:w-2/3 w-full p-4 md:p-6 bg-white">
            {/* Adjust width as needed */}
            <div className="container mx-auto">
               {/* Content container for responsiveness */}
               <p>left section</p>
            </div>
         </div>
         {/* Right Column */}
         <div className="md:w-1/3 w-full p-4 md:p-6 bg-gray-50">
            {/* Adjust width as needed */}
            <div className="container mx-auto">
               {/* Content container for responsiveness */}
               <p>right section</p>
            </div>
         </div>
      </div>
   );
}

export default CreateSharePost;
