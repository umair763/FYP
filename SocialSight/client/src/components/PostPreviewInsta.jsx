import { useState } from 'react';
import { FaHeart, FaComment, FaShare, FaBookmark } from 'react-icons/fa';

function PostPreviewInsta({ user, image, description }) {
   return (
      <>
         <h1 className="text-gray-600 -mt-2 mb-4 font-semibold text-lg">Post Preiew</h1>
         <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 p-4">
            {/* Header */}
            <div className="flex items-center space-x-3 w-10 h-10 ">
               <img src={user.profilePic} alt="Profile" className="w-8 h-8 rounded-full object-cover" />
               <div>
                  <p className="font-semibold text-gray-900">{user.name}</p>
                  <p className="text-xs text-gray-500">Sponsored</p>
               </div>
            </div>

            {/* Image */}
            <div className="mt-3">
               <img src={image} alt="Post" className="w-full rounded-lg object-cover " />
            </div>

            {/* Learn More Button */}
            <div className="mt-2 text-gray-700 font-medium cursor-pointer hover:underline">Learn more</div>

            <div className="flex justify-between mt-3 text-gray-500 text-lg">
               <div className="flex gap-4">
                  <FaHeart className="cursor-pointer hover:text-red-500" />
                  <FaComment className="cursor-pointer hover:text-blue-500" />
                  <FaShare className="cursor-pointer hover:text-green-500" />
               </div>
               <div>
                  <FaBookmark className="cursor-pointer hover:text-fuchsia-500" />
               </div>
            </div>

            {/* Description */}
            <div className="mt-3 text-sm text-gray-700">
               <span className="font-semibold text-gray-900">{user.name}</span> {description}
            </div>
         </div>
      </>
   );
}

export default PostPreviewInsta;
