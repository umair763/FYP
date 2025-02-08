import { ArrowUpRight } from 'lucide-react';

const FollowerCard = ({ platform, followers, change, icon, gradient }) => {
   // Add gradient prop
   return (
      <div
         className="bg-white shadow-lg rounded-2xl p-4 w-40 sm:w-48 md:w-56 flex flex-col items-start border border-gray-200 relative" // Relative for absolute positioning of gradient
         style={{ backgroundColor: '#F5EFFB' }}
      >
         {/* Gradient Overlay */}
         {gradient && ( // Conditionally render the gradient
            <div className="absolute inset-0 rounded-2xl" style={{ background: gradient }}></div>
         )}

         <div className="relative z-10 flex flex-col">
            <div className="rounded-full">
               <img src={icon} alt={platform} className="w-10 h-10" />
            </div>
            {/* Followers Count */}
            <p className="text-gray-600 text-lg font-bold mt-4">Followers</p>
            <div className="flex flex-row">
               <h2
                  className="text-2xl font-bold text-gray-900 stretch-font mr-3 "
                  style={{ transform: 'scaleY(2)', transformOrigin: 'top' }}
               >
                  {followers}
               </h2>
               {/* Percentage Change */}
               <div className="mt-4">
                  <div className="flex  gap-2 bg-blue-100 text-blue-600 px-2 py-1 rounded-full mt-2 text-sm font-semibold">
                     {change}% <ArrowUpRight size={14} />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default FollowerCard;
