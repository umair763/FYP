import { useState } from 'react';
import CreatePost from '../../components/CreatePost';
import PostPreviewInsta from '../../components/PostPreviewInsta';

function CreateSharePost() {
   return (
      <>
         {/* <h1 className="bg-purple-100 text-[#6E54D1] pl-4 pt-4 font-semibold text-2xl ">Create Post</h1> */}
         <div className="min-h-screen bg-purple-100 flex flex-col md:flex-row rounded-xl">
            {/* Left Column */}
            <div className="md:w-2/3 w-full md:p-6">
               <h1 className="text-nowrap -mt-4 mb-4 ml-1 text-[#6E54D1] font-semibold text-2xl">Create post</h1>
               <div className="container mx-auto">
                  {/* Content container for responsiveness */}
                  <CreatePost />
               </div>
            </div>
            {/* Right Column */}
            <div className="md:w-1/3 w-full p-4 md:p-6 bg-gray-50 rounded-xl mr-4 mt-14 mb-8">
               {/* Adjust width as needed */}
               <div className="container mx-auto">
                  <PostPreviewInsta
                     user={{
                        name: 'Creatives.ai',
                        profilePic: './src/assets/images/person-icon-1682.png',
                     }}
                     image="./src/assets/images/postpreviewImg.png"
                     description="Transform your social media game with our cutting-edge tool! Our platform uses AI technology... "
                  />
               </div>
            </div>
         </div>
      </>
   );
}

export default CreateSharePost;
