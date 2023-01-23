import React from 'react';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Rechart = () => {
    const data = [
        {
          name: 'Sales A',
          price: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Sales B',
          price: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Sales C',
          price: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Sales D',
          price: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Sales E',
          price: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Sales F',
          price: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Sales G',
          price: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
    return (
        <LineChart width={1000} height={300} data={data}>
            <Line dataKey={'price'}></Line>
            <Line dataKey={'pv'}></Line>
            <XAxis dataKey={'name'}></XAxis>
            <Tooltip></Tooltip>
            <Legend></Legend>
            <YAxis></YAxis>

        </LineChart>
        
    );
};

export default Rechart;