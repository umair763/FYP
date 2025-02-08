import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';
import { FaSignOutAlt, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';

function Sidebar() {
   return (
      <aside className="w-64 bg-gray-50 p-4">
         {/* Added some basic styling */}
         <ul>
            <li>
               <div className="flex flex-col p-1 -ml-1 mt-2">
                  <div className="w-full flex items-center py-2 px-2 hover:bg-gray-200 bg-gray-100 text-black rounded justify-start text-left">
                     <h5>Channels</h5>
                  </div>
               </div>
            </li>
            <li>
               <div className="flex flex-col p-1 -ml-1 mt-2">
                  <div className="w-full flex items-center py-2 px-2 hover:bg-red-400 bg-red-300 text-red-700 rounded justify-start text-left">
                     <FaFacebook className="mr-2" size={20} />
                     <Link to="/connecttofacebook" className="flex-grow">
                        Connect Facebook
                     </Link>
                  </div>
               </div>
            </li>
            <li>
               <div className="flex flex-col p-1 -ml-1 mt-2">
                  <div className="w-full flex items-center py-2 px-2 hover:bg-red-400 bg-red-300 text-red-700 rounded justify-start text-left">
                     <FaInstagram className="mr-2" size={20} />
                     <Link to="/connecttoinsta" className="flex-grow">
                        Connect Instagram
                     </Link>
                  </div>
               </div>
            </li>
            <li>
               <div className="flex flex-col p-1 -ml-1 mt-2">
                  <div className="w-full flex items-center py-2 px-2 hover:bg-red-400 bg-red-300 text-red-700 rounded justify-start text-left">
                     <FaTwitter className="mr-2" size={20} />
                     <Link to="/connecttotwitter" className="flex-grow">
                        Connect Twitter
                     </Link>
                  </div>
               </div>
            </li>
            <li>
               <div className="flex flex-col p-1 -ml-1 mt-2">
                  <div className="w-full flex items-center py-2 px-2 hover:bg-red-400 bg-red-300 text-red-700 rounded justify-start text-left">
                     <FaYoutube className="mr-2" size={20} />
                     <Link to="/connecttoyoutube" className="flex-grow">
                        Connect Youtube
                     </Link>
                  </div>
               </div>
            </li>
            <li>
               <div className="flex flex-col p-1 -ml-1 mt-2">
                  <div className="w-full flex items-center py-2 px-2 hover:bg-red-400 bg-red-300 text-red-700 rounded justify-start text-left">
                     <FaLinkedin className="mr-2" size={20} />
                     <Link to="/connecttoyoutube" className="flex-grow">
                        Connect Linkedin
                     </Link>
                  </div>
               </div>
            </li>
            <li>
               <div className="flex flex-col p-1 -ml-1 mt-54">
                  <Button className="w-full flex items-center py-2 px-2 hover:bg-red-400 bg-red-300 text-red-700 rounded justify-start text-left">
                     <FaSignOutAlt className="mr-2" size={20} />
                     <span className="flex-grow">Sign Out</span>
                  </Button>
               </div>
            </li>
            {/* Add more sidebar links as needed */}
         </ul>
      </aside>
   );
}

export default Sidebar;
