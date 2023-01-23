import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
// import { Area, AreaChart, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
// import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const SpecialChart = () => {
    const [data, setProduct] = useState([]);
    // const [names, setNames]= useState([]);

    useEffect(()=>{
        axios('products.json')
        .then(data => {
            const loadData = data.data;
            const productData = loadData.map(product => product);
            // const names = loadData.map(name => name.name)
            // console.log(products)
            setProduct(productData);
            // setNames(names)
        })
        
    },[])
    // const {price, name} = product;
    console.log(data)
    return (
        // area chart 

//         <AreaChart width={1000} height={400} data={data}
//   margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
//   <defs>
//     <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
//       <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
//       <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
//     </linearGradient>
//     <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
//       <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
//       <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
//     </linearGradient>
//   </defs>
//   <XAxis dataKey="name" />
//   <YAxis />
//   <CartesianGrid strokeDasharray="3 3" />
//   <Tooltip />
//   <Area type="monotone" dataKey="ratingsCount" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
//   <Area type="monotone" dataKey="price" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
// </AreaChart>

// Bar chart 

<BarChart width={1500} height={400} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="price" fill="#800000" />
  <Bar dataKey="ratingsCount" fill="#82ca9d" />
</BarChart>


//  line chart 
            // <LineChart width={1000} height={550} data={data}
            // margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            // <CartesianGrid strokeDasharray="3 3" />
            // <XAxis dataKey="price" />
            // <YAxis dataKey='ratingsCount'/>
            // <Tooltip />
            // <Legend />
            // <Line type="monotone" dataKey="price" stroke="#8884d8" />
            // <Line type="monotone" dataKey="ratingsCount" stroke="#82ca9d" />
            // </LineChart>
    );
};

export default SpecialChart;