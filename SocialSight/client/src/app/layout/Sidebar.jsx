import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';
import { FaSignOutAlt, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { FaCogs } from 'react-icons/fa';

function Sidebar() {
   return (
      <aside className="w-64 bg-gray-50 p-4 text-gray-600">
         {/* Added some basic styling */}
         <ul>
            <li>
               <div className="flex flex-col p-1 -ml-1 mt-2 text-black">
                  <div className="w-full flex items-center py-2 px-2 bg-gray-100  rounded justify-start text-left">
                     <h5>Channels</h5>
                  </div>
               </div>
            </li>
            <li>
               <div className="flex flex-col p-1 -ml-1 mt-2">
                  <div className="w-full flex items-center py-2 px-2 hover:bg-gray-200 bg-gray-100  rounded justify-start text-left">
                     <FaFacebook className="mr-2 text-blue-800" size={20} />
                     <Link to="/connecttofacebook" className="flex-grow">
                        Connect Facebook
                     </Link>
                  </div>
               </div>
            </li>
            <li>
               <div className="flex flex-col p-1 -ml-1 mt-2">
                  <div className="w-full flex items-center py-2 px-2 hover:bg-gray-200 bg-gray-100  rounded justify-start text-left">
                     <FaInstagram className="mr-2 text-red-800" size={20} />
                     <Link to="/connecttoinsta" className="flex-grow">
                        Connect Instagram
                     </Link>
                  </div>
               </div>
            </li>
            <li>
               <div className="flex flex-col p-1 -ml-1 mt-2">
                  <div className="w-full flex items-center py-2 px-2 hover:bg-gray-200 bg-gray-100  rounded justify-start text-left">
                     <FaTwitter className="mr-2 text-blue-700" size={20} />
                     <Link to="/connecttotwitter" className="flex-grow">
                        Connect Twitter
                     </Link>
                  </div>
               </div>
            </li>
            <li>
               <div className="flex flex-col p-1 -ml-1 mt-2">
                  <div className="w-full flex items-center py-2 px-2 hover:bg-gray-200 bg-gray-100  rounded justify-start text-left">
                     <FaYoutube className="mr-2 text-red-600" size={20} />
                     <Link to="/connecttoyoutube" className="flex-grow">
                        Connect Youtube
                     </Link>
                  </div>
               </div>
            </li>
            <li>
               <div className="flex flex-col p-1 -ml-1 mt-2">
                  <div className="w-full flex items-center py-2 px-2 hover:bg-gray-200 bg-gray-100  rounded justify-start text-left">
                     <FaLinkedin className="mr-2 text-blue-600" size={20} />
                     <Link to="/AddLinkedin" className="flex-grow">
                        Connect Linkedin
                     </Link>
                  </div>
               </div>
            </li>
            <li>
               <div className="flex flex-col p-1 -ml-1 mt-20">
                  <div className="w-full flex items-center py-2 px-2 hover:bg-gray-200 bg-gray-100  rounded justify-start text-left">
                     <FaCogs className="mr-2 text-blue-600" size={20} />
                     <Link to="/manageTag" className="flex-grow">
                        Manage Tag
                     </Link>
                  </div>
               </div>
            </li>
            <li>
               <div className="flex flex-col p-1 -ml-1 mt-2">
                  <div className="w-full flex items-center py-2 px-2 hover:bg-gray-200 bg-gray-100  rounded justify-start text-left">
                     <FaCogs className="mr-2 text-blue-600" size={20} />
                     <Link to="/manageChannel" className="flex-grow">
                        Manage Channel
                     </Link>
                  </div>
               </div>
            </li>
            <li>
               <div className="flex flex-col p-1 -ml-1 mt-2">
                  <Button className="w-full flex items-center py-2 px-2 hover:bg-gray-200 bg-gray-100 cursor-pointer  rounded justify-start text-left">
                     <FaSignOutAlt className="mr-2 text-red-800" size={20} />
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
