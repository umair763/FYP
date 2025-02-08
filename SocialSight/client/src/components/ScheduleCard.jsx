import React from 'react';

function ScheduleCard() {
   return (
      <div className="bg-white rounded-xl shadow-custom p-6 w-full">
         {' '}
         {/* Card container */}
         <h2 className="text-xl font-semibold text-gray-800 mb-4">Scheduled</h2>
         {/* Post 1 */}
         <div className="flex items-start mb-4 pb-4 border-b border-gray-200">
            {' '}
            {/* Post container with bottom border */}
            <div className="bg-blue-100 rounded-lg w-12 h-12 mr-3 flex items-center justify-center">
               {' '}
               {/* Icon container */}
               {/* Replace with your icon SVG or image */}
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth={2}
                     d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
               </svg>
            </div>
            <div className="flex-grow">
               {' '}
               {/* Post content */}
               <p className="text-gray-800 font-medium">We're excited to announce the launch of our AI-pow...</p>
               <div className="flex items-center text-gray-500 text-sm mt-1">
                  <span className="bg-blue-500 rounded-full w-2 h-2 mr-1"></span> {/* Blue dot */}
                  <span>Today 18:03</span>
               </div>
            </div>
         </div>
         {/* Post 2 (structure is the same) */}
         <div className="flex items-start">
            <div className="bg-red-100 rounded-lg w-12 h-12 mr-3 flex items-center justify-center">
               {' '}
               {/* Different icon container color */}
               {/* Replace with your icon SVG or image */}
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth={2}
                     d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 002.5 2.5h-5A2.5 2.5 0 008 13.5V12m0 0l3 3m-3 3l3-3"
                  />
               </svg>
            </div>
            <div className="flex-grow">
               <p className="text-gray-800 font-medium">Social media is a jungle out there</p>
               <div className="flex items-center text-gray-500 text-sm mt-1">
                  <span className="bg-red-500 rounded-full w-2 h-2 mr-1"></span> {/* Red dot */}
                  <span>09 Feb 12:10</span>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ScheduleCard;
