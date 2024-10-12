import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './BarChart.css'; // Import custom CSS

const data = [
  { month: 'Jan', earnings: 3000 },
  { month: 'Feb', earnings: 6000 },
  { month: 'Mar', earnings: 5000 },
  { month: 'Apr', earnings: 7000 },
  { month: 'May', earnings: 8000 },
  { month: 'Jun', earnings: 4000 },
];

const BarChartComponent = () => {
  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="month" stroke="#555" />
          <YAxis stroke="#555" />
          <Tooltip contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.85)', borderRadius: '10px', border: 'none' }} cursor={{ fill: 'rgba(200, 200, 200, 0.2)' }} />
          <Legend />
          <Bar dataKey="earnings" fill="url(#colorEarnings)" radius={[10, 10, 0, 0]} />
          <defs>
            <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#42a5f5" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#64b5f6" stopOpacity={0.6}/>
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
