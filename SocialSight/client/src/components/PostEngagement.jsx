import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const data = [
   { month: 'JAN', Instagram: 1200, Facebook: 1000 },
   { month: 'FEB', Instagram: 1500, Facebook: 1800 },
   { month: 'MAR', Instagram: 1700, Facebook: 2500 },
   { month: 'APR', Instagram: 1400, Facebook: 1900 },
   { month: 'MAY', Instagram: 1600, Facebook: 1500 },
   { month: 'JUN', Instagram: 2000, Facebook: 1200 },
   { month: 'JUL', Instagram: 1900, Facebook: 1600 },
   { month: 'AUG', Instagram: 1400, Facebook: 1300 },
   { month: 'SEP', Instagram: 1300, Facebook: 1400 },
   { month: 'OCT', Instagram: 1800, Facebook: 1500 },
   { month: 'NOV', Instagram: 2000, Facebook: 1000 },
   { month: 'DEC', Instagram: 2200, Facebook: 900 },
];

const CustomTooltip = ({ active, payload }) => {
   if (active && payload && payload.length) {
      return (
         <div className="bg-black text-white text-xs px-2 py-1 rounded-md shadow-md">
            {`${payload[0].value.toLocaleString()}K`}
         </div>
      );
   }
   return null;
};

function PostEngagement() {
   const [selected] = useState('Year');
   return (
      <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-200 w-full max-w-2xl">
         <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Page Engagement</h2>
            <div className="relative">
               <button className="flex items-center gap-1 text-gray-600 text-sm bg-gray-100 px-3 py-1 rounded-lg">
                  {selected} <ChevronDown size={16} />
               </button>
            </div>
         </div>
         <div className="">
            <ResponsiveContainer width="100%" height={230}>
               <LineChart data={data}>
                  <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#666' }} />
                  <YAxis tick={{ fontSize: 12, fill: '#666' }} domain={[0, 3000]} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend iconType="square" verticalAlign="top" height={36} wrapperStyle={{ top: -35, left:65 }} />
                  <Line type="monotone" dataKey="Instagram" stroke="#FF5733" strokeWidth={3} dot={{ r: 4 }} />
                  <Line type="monotone" dataKey="Facebook" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4 }} />
               </LineChart>
            </ResponsiveContainer>
         </div>
      </div>
   );
}

export default PostEngagement;
