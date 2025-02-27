import React, { useState } from 'react';
import { FaFacebook } from 'react-icons/fa';

function CreatePost() {
   const [postContent, setPostContent] = useState('');
   const [selectedFile, setSelectedFile] = useState(null);
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [user, setUser] = useState(null);

   const handleFacebookLogin = () => {
      FB.login(
         (response) => {
            if (response.authResponse) {
               setIsLoggedIn(true);
               FB.api('/me', { fields: 'name,email' }, (userInfo) => {
                  setUser(userInfo);
                  console.log('User Info:', userInfo);
               });
            } else {
               console.log('User cancelled login or did not fully authorize.');
            }
         },
         {
            scope: 'public_profile,email,user_posts,user_photos,user_videos',
         }
      );
   };

   const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const isImage = file.type.startsWith('image/');
      const isVideo = file.type.startsWith('video/');

      if (!isImage && !isVideo) {
         alert('Only image and video files are supported.');
         return;
      }

      const fileWithPreview = Object.assign(file, {
         preview: URL.createObjectURL(file),
      });

      setSelectedFile(fileWithPreview);
   };

   const handlePostSubmit = () => {
      if (!postContent && !selectedFile) {
         alert('Please add text or a file to post!');
         return;
      }

      getPageAccessToken((pageId, pageAccessToken) => {
         if (!pageAccessToken) {
            alert('Page access token required to post!');
            return;
         }

         if (selectedFile) {
            const isImage = selectedFile.type.startsWith('image/');
            const isVideo = selectedFile.type.startsWith('video/');

            if (isImage) {
               const formData = new FormData();
               formData.append('source', selectedFile);
               formData.append('message', postContent);
               formData.append('access_token', pageAccessToken);

               fetch(`https://graph.facebook.com/${'574722859055066'}/photos`, {
                  method: 'POST',
                  body: formData,
               })
                  .then((res) => res.json())
                  .then((response) => {
                     if (response.error) {
                        console.error('Image Upload Error:', response.error);
                        return;
                     }
                     console.log('Image Uploaded Successfully:', response);
                  })
                  .catch((error) => console.error('Image Upload Failed:', error));
            } else if (isVideo) {
               alert('Videos require a direct URL. Upload the video to a hosting service first.');
            }
         } else {
            // Text-only post
            FB.api(
               `/${pageId}/feed`,
               'POST',
               {
                  message: postContent,
                  access_token: pageAccessToken,
               },
               (response) => {
                  if (response.error) {
                     console.error('Post error:', response.error);
                     return;
                  }
                  console.log('Post successful:', response);
               }
            );
         }
      });
   };

   return (
      <div className="bg-white rounded-3xl shadow-md p-6 w-xl border border-gray-200">
         <div className="flex items-center justify-between mb-4">
            <span className="text-gray-500 font-medium">Sharing to</span>
            <div className="flex gap-4">
               <div className={`flex items-center gap-2 cursor-pointer flex-col text-xl`}>
                  <FaFacebook className="text-gray-500" />
                  <span className="text-sm text-gray-700">Facebook</span>
               </div>
            </div>
         </div>

         <div className="h-72 border rounded-lg p-4 border-orange-400 text-gray-700">
            <textarea
               className="w-full border-none focus:outline-none resize-none"
               rows="4"
               placeholder="Write your post here..."
               value={postContent}
               onChange={(e) => setPostContent(e.target.value)}
            ></textarea>
         </div>

         <div className="flex items-center gap-2 mt-4">
            <input
               type="file"
               accept="image/*,video/*" // Allow image/video files
               onChange={handleFileChange}
               className="cursor-pointer bg-gray-200 rounded-xl p-1"
            />
            {selectedFile && <span>{selectedFile.name}</span>}
         </div>

         {!isLoggedIn ? (
            <button onClick={handleFacebookLogin} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl mt-4">
               Log in with Facebook
            </button>
         ) : (
            <div className="flex justify-end mt-4">
               <button
                  onClick={handlePostSubmit}
                  className="bg-orange-400 hover:bg-orange-500 cursor-pointer text-white px-6 py-2 rounded-xl shadow-lg"
               >
                  Publish →
               </button>
            </div>
         )}
      </div>
   );
}

export default CreatePost;
