import React from 'react'
import { IoIosSearch } from "react-icons/io";
import Patients from './Patients';
import Chartgraph from './ChartGraph';
import respiratoryImg from '../images/respiratory rate.svg'
import heartImg from '../images/HeartBPM.svg'
import tempImg from '../images/temperature.svg'
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
        {/* chart section */}
        <div>
            <Chartgraph/>
        </div>

        <div className='flex justify-between gap-6 mt-4'>
            <div className='bg-blue-200 p-3 rounded-md mt-4 flex-1'>
                <img className='w-16' src={respiratoryImg} alt='respiratoryImg'/>
                <h2>Respiratory Rate</h2>
                <h1 className='font-bold text-2xl'>20 bpm</h1>
                <p className='text-sm'>Normal</p>
            </div>
            <div className='bg-pink-200 p-3 rounded-md mt-4 flex-1'>
                <img className='w-16' src={tempImg} alt='respiratoryImg'/>
                <h2>Temperature</h2>
                <h1 className='font-bold text-2xl'>98.6 F</h1>
                <p className='text-sm'>Normal</p>
            </div>
            <div className='bg-pink-200 p-3 rounded-md mt-4 flex-1'>
                <img className='w-16' src={heartImg} alt='respiratoryImg'/>
                <h2>Heart Rate</h2>
                <h1 className='font-bold text-2xl'>78 bpm</h1>
                <p className='text-sm'>Lower than Average</p>
            </div>
        </div>
        </div>
        {/* list section */}
        <div className='bg-white mt-6 rounded-md p-3'>
            <h2 className='text-lg font-semibold'>Diagnostic List</h2>
            <div className=''>
                <div className='bg-gray-100 rounded-full w-full p-4 mt-4'>
                    <ul className='flex justify-between font-semibold'>
                        <li>Problem/Diagnosis</li>
                        <li>Description</li>
                        <li>Status</li>
                    </ul>
                </div>
                <div className='bg-white h-28 overflow-scroll w-full p-2 flex justify-between'> 
                <div>
                    <ul className='flex flex-col gap-2'>
                        <li>Hpertension</li>
                        <li>Type 2 Diabetes</li>
                        <li>Asthma</li>
                        <li>Osteoarthitis</li>
                        <li>Allergic Phintis</li>
                        <li></li>
                    </ul>
                </div>
                <div>
                    <ul className='flex flex-col gap-2'>
                        <li> Chronic high blood pressure</li>
                        <li>Insulin resistance and elevated blood sugar</li>
                        <li>Recurrent episodes of bronchial constriction</li>
                        <li>Degenerative joint desease</li>
                        <li>Seasonal allergies causing nasal congestion</li>
                    </ul>
                </div>
                <div>
                    <ul className='flex flex-col gap-2'>
                        <li>Under Observation</li>
                        <li>Cured</li>
                        <li>Inactive</li>
                        <li>Untreatable</li>
                        <li>Active</li>
                    </ul>
                </div>
                </div>
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
