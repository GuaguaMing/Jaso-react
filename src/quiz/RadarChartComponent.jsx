import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from 'recharts';

const RadarChartComponent = ({ radarData }) => {
  return (
    <ResponsiveContainer width={400} height={360}>
      <RadarChart
        data={radarData}
        cx="50%"
        cy="50%"
        outerRadius="80%"
        startAngle={0}
        endAngle={-360}
      >
        <PolarGrid stroke="#AAA6A8" />
        <PolarAngleAxis dataKey="nutrient" tick={{ fontSize: 12 }} />
        <Radar
          name="營養分數"
          dataKey="score"
          stroke="#3DCE94"
          fill="#3DCE94"
          fillOpacity={0.75}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChartComponent;