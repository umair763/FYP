import React from "react";
import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";
import { ArrowUpRight } from "lucide-react";

const data = [
  { name: "JAN", value: 40 },
  { name: "FEB", value: 90 },
  { name: "MAR", value: 120 },
  { name: "APR", value: 280 }, // Highlighted
  { name: "MAY", value: 100 },
  { name: "JUN", value: 120 },
];

const OverallConversionBarGraph = () => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-md w-full max-w-lg">
      {/* Header */}
      <h2 className="text-lg font-medium text-gray-600">Overall Conversion</h2>

      {/* Percentage Section */}
      <div className="flex items-center gap-2">
        <span className="text-3xl font-bold">8.06%</span>
        <div className="flex items-center gap-1 bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm font-medium">
          <span>1.2%</span>
          <ArrowUpRight size={14} />
        </div>
      </div>

      {/* Subtext */}
      <p className="text-gray-400 text-sm mt-1">This month</p>

      {/* Bar Chart */}
      <div className="mt-4">
        <ResponsiveContainer width="100%" height={80}>
          <BarChart data={data}>
            <XAxis
              dataKey="name"
              axisLine={false}
              tick={{ fill: "gray", fontSize: 12 }}
            />
            <Bar
              dataKey="value"
              radius={[10, 10, 0, 0]}
              fill="rgba(255, 87, 51, 1)"
              opacity={({ index }) => (index === 3 ? 1 : 0.3)} // Highlight APR
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default OverallConversionBarGraph;

