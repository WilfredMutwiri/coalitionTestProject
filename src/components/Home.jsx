import React from 'react'
import { IoIosSearch } from "react-icons/io";
import Patients from './Patients';
import Chartgraph from './ChartGraph';
export default function Home() {
  return (
    // main home div
    <div className='w-full bg-gray-100 pt-5 pb-5'>
        <div className='flex justify-between w-[96%] m-auto gap-6 align-middle'>
        {/* left side div */}
        <aside>
        <div className='bg-white rounded-md p-2 w-[280px]'>
            <div className='flex justify-between p-2'>
                <h2 className='font-semibold'>Patients</h2>
                <IoIosSearch className='w-5 h-5'/>
            </div>
            {/* patients div */}
            <Patients/>
        </div>
        </aside>
        {/* diagnosis section */}
        <section>
        <div className='bg-white p-3 rounded-md'>
            <div className=' w-[200px]'>
            <h2 className='p-4 font-semibold'>Diagnosis History</h2>
        </div>
        <div>
            <Chartgraph/>
        </div>
            </div>
        </section>
        <div className=' bg-white w-[280px]'>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vel perspiciatis porro optio exercitationem aspernatur laboriosam earum minus labore atque?
            </p>
        </div>
    </div>
    </div>
  )
}
