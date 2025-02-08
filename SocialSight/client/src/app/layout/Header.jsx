import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
   return (
      <header className="text-[#6E54D1] bg-gray-50 p-4 flex justify-between items-center text-left">
         {/* Added some basic styling */}
         <h1 className="text-2xl font-bold">SocialSight</h1>
         <nav className="flex-1 text-right">
            <Link to="/" className="mr-4">
               Dashboard
            </Link>
            <Link to="/scheduling" className="mr-4">
               scheduling
            </Link>
            <Link to="/analytics" className="mr-4">
               Analytics
            </Link>
            <Link to="/calendar" className="mr-4">
               Calendar
            </Link>
            <Link to="/sentiment" className="mr-4">
               Sentiment
            </Link>
            <Link to="/comparison" className="mr-4">
               Comparison
            </Link>
            <Link to="/setting" className="mr-4">
               Setting
            </Link>
         </nav>
      </header>
   );
}

export default Header;
