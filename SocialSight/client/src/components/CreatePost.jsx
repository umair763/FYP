import { useState } from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

function CreatePost() {
   const [selectedPlatform, setSelectedPlatform] = useState('Instagram');
   const platforms = [
      { name: 'Facebook', icon: <FaFacebook className="text-gray-500" /> },
      { name: 'Instagram', icon: <FaInstagram className="text-pink-500" /> },
   ];

   return (
      <div className="max-w-lg mx-auto bg-white rounded-3xl shadow-md p-6 border border-gray-200">
         <div className="flex items-center justify-between mb-4">
            <span className="text-gray-500 font-medium">Sharing to</span>
            <div className="flex gap-4">
               {platforms.map((platform) => (
                  <div
                     key={platform.name}
                     className={`flex items-center gap-2 cursor-pointer ${
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

         <div className="border rounded-lg p-4 border-orange-400 text-gray-700">
            <p>
               Transform your social media game with our cutting-edge tool! Our platform uses AI technology to
               streamline social media management, offering helpful insights and suggestions for your campaigns.
            </p>
            <p className="mt-2 font-bold">#AI #SocialMedia #ProductLaunch 💪</p>
            <img src="/post-image.png" alt="Post Preview" className="mt-3 w-20 h-20 rounded-lg border" />
         </div>

         <div className="flex justify-between items-center mt-4">
            <div className="flex gap-3 text-gray-500">
               <span className="cursor-pointer">📎</span>
               <span className="cursor-pointer">🖼️</span>
               <span className="cursor-pointer">GIF</span>
            </div>
            <span className="text-gray-500 text-sm">Today 12:00</span>
         </div>

         <div className="flex justify-end mt-4">
            <Button className="bg-orange-500 text-white px-6 py-2 rounded-xl shadow-lg">Publish →</Button>
         </div>
      </div>
   );
}

export default CreatePost;
