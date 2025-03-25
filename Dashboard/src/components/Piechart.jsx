import * as React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { desktopOS, valueFormatter } from './webUsageStats';
export default function PieArcLabel() {
  const categories=JSON.parse(localStorage.getItem('Keys'))
  const products=JSON.parse(localStorage.getItem('Data'))
  const count={}
  categories.map((item)=>{
    count[item]=0
  })

  products.map((item) => {
    count[item.category]++
  })
  
  const data = categories.map((item) => {
    return {
      id: item,
      value: count[item],
      label: item
    }
  })
  console.log(data)
  return (
   <div style={{backgroundColor:"#f2e2b1", borderRadius:"10px", height:"300px", display:"flex", justifyContent:"center", alignItems:"center"}}>
     <PieChart
      series={[
        {

         data:data,


        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fontWeight: 'bold',
        },
      }}
      {...size}
    />
   </div>
  );
}

const size = {
  width: 400,
  height: 200,
};

const data = {
  data: desktopOS,
  valueFormatter,
};


