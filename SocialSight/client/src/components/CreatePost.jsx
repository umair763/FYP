import { useState } from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import Button from './common/Button.jsx';

function CreatePost() {
   const [selectedPlatform, setSelectedPlatform] = useState('Instagram');
   const [postContent, setPostContent] = useState('');
   const platforms = [
      { name: 'Facebook', icon: <FaFacebook className="text-gray-500" /> },
      { name: 'Instagram', icon: <FaInstagram className="text-pink-500" /> },
   ];

   return (
      <div className="h-auto mx-auto bg-white rounded-3xl shadow-md p-6 border border-gray-200">
         <div className="flex items-center justify-between mb-4">
            <span className="text-gray-500 font-medium">Sharing to</span>
            <div className="flex gap-4">
               {platforms.map((platform) => (
                  <div
                     key={platform.name}
                     className={`flex items-center gap-2 cursor-pointer flex-col text-xl ${
                        selectedPlatform === platform.name ? 'border-b-2 border-orange-500' : ''
                     }`}
                     onClick={() => setSelectedPlatform(platform.name)}
                  >
                     {platform.icon}
                     <span className="text-sm text-gray-700">{platform.name}</span>
                  </div>
               ))}
            </div>
            <Button className="bg-gray-100 text-gray-700 px-3 py-1 rounded-xl text-sm">Product Launch ▼</Button>
         </div>

         <div className=" h-72 border rounded-lg p-4 border-orange-400 text-gray-700">
            <textarea
               className=" w-full border-none focus:outline-none resize-none"
               rows="4"
               placeholder="Write your post here..."
               value={postContent}
               onChange={(e) => setPostContent(e.target.value)}
            ></textarea>
            <div className="flex items-center gap-2 mt-18">
               <img src="./src/assets/images/upload.png" alt="Post Preview" className="w-20 h-20 rounded-lg border" />
            </div>
         </div>

         <div className="flex justify-between items-center mt-5 bg-gray-100 p-3 rounded-xl">
            <div className="flex gap-3 text-gray-500">
               <label className="cursor-pointer">
                  📎
                  <input type="file" className="hidden" />
               </label>
               <label className="cursor-pointer">
                  🖼️
                  <input type="file" accept="image/*" className="hidden" />
               </label>
               <label className="cursor-pointer">
                  🎥
                  <input type="file" accept="video/*" className="hidden" />
               </label>
               <span className="cursor-pointer">😀</span>
            </div>
            <span className="text-gray-500 text-sm">Today 12:00</span>
         </div>

         <div className="flex justify-end mt-4">
            <Button className="bg-orange-400 hover:bg-orange-500 cursor-pointer text-white px-6 py-2 rounded-xl shadow-lg">
               Publish →
            </Button>
         </div>
      </div>
   );
}

export default CreatePost;
