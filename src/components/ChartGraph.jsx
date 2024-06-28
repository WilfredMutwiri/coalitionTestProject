import React from 'react'
import {Line} from 'react-chartjs-2'
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";
import { Chart as ChartJS,
CategoryScale,
LinearScale ,
PointElement,
LineElement,
Title,
Tooltip,
Legend,
plugins,
scales,
Ticks
} from 'chart.js'
import { chartData } from './ChartData';
ChartJS.register(
  CategoryScale,
  LinearScale ,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)
export default function ChartGraph() {
  const options={
    responsive:true,
    plugins:{
      legend:{
        position:"bottom"
      },
      title:{
        display:true,
        text:"Blood Pressure Last 6 Months"
      }
    },
    scales:{
      y:{
        min:60,
        max:180,
        stepSize:20
      }
    }
  };
  return( 
  <div className='bg-gray-100 mx-auto rounded-md flex w-auto p-3'>
    <div className='w-10/12'>
    <Line options={options} data={chartData}/>
    </div>
      <div className='w-auto flex flex-col gap-2 pl-2'>
        <div>
          <h2 className='text-sm'>Systolic</h2>
          <h1 className='font-semibold'>160</h1>
          <p className='text-sm '><TiArrowSortedUp/> Higher than Average</p>
        </div>
        <hr />
        <div>
          <h2 className='text-sm'>Diastolic</h2>
          <h1 className='font-semibold'>78</h1>
          <p className='text-sm'><TiArrowSortedDown/> Lower than Average</p>
        </div>
      </div>
  </div>
  )
}
