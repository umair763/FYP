import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { useContext } from 'react';
import Button from '../../components/common/Button';
import PostEngagement from '../../components/PostEngagement';
import { BarChart, Line, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import ScheduleCard from '../../components/ScheduleCard';
import LastEditied from '../../components/LastEditied';
import FollowerCard from '../../components/common/FollowerCard';
import OverallConversionBarGraph from '../../components/OverallConversionBarGraph';

function Dashboard() {
   const navigate = useNavigate();

   return (
      <div className="flex min-h-screen bg-gray-100">
         {/* Left Section (Charts) */}
         <div className="w-1/2 p-4 flex flex-col">
            <div className="h-1/2 mb-4">
               {/* Line Chart */}
               <PostEngagement />
            </div>
            <div className="h-1/2">
               {/* Bar Chart */}
               <OverallConversionBarGraph />
            </div>
         </div>

         {/* Right Section (Cards) */}
         <div className="w-1/2 p-4 flex flex-col">
            {/* Top Cards (Vertical) */}
            <div className=" flex flex-col justify-center items-center mb-4">
               <div className="bg-white rounded-lg shadow-md w-3/3  ">
                  {/* Card 1 content */}
                  <LastEditied />
               </div>
            </div>
            <div className="flex flex-col justify-center items-center ">
               <div className="bg-white rounded-lg shadow-md w-4/4 ">
                  {/* Card 2 content */}
                  <ScheduleCard />
               </div>
            </div>

            {/* Bottom Cards (Horizontal) */}
            <div className="flex justify-center items-center mt-4 w-2/3 gap-4 ml-1">
               {/* Key change: gap-4 */}
               <FollowerCard
                  platform="Facebook"
                  followers="6.1K"
                  change="-2.3"
                  icon="./src/assets/images/facebookico.png"
                  gradient="linear-gradient(to bottom, #1877F2, #FFFFFF)
"
               />
               <FollowerCard
                  platform="Instagram"
                  followers="8.1K"
                  change="-2.3"
                  icon="./src/assets/images/instaico.png"
                  gradient="linear-gradient(to top, #F09433, #E95F17, #DB005A, #633194)"
               />
            </div>
         </div>
      </div>
   );
}

export default Dashboard;

{
   /* <Button
   onClick={() => {
      navigate('/createpost');
   }}
   className="bg-blue-600 rounded-full p-2 text-white fixed bottom-8 right-20"
>
   <b>+</b> Create Post
</Button> */
}
