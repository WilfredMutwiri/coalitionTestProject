import React from 'react'
import { IoIosSearch } from "react-icons/io";
import Patients from './Patients';
export default function Home() {
  return (
    // main home div
    <div className='w-full bg-gray-100 pt-5 pb-5'>
        <div className='flex w-11/12 m-auto gap-6 align-middle'>
        {/* left side div */}
        <div className='bg-white rounded-md flex-grow-1 p-2'>
            <div className='flex justify-between w-64 p-2'>
                <h2 className='font-semibold'>Patients</h2>
                <IoIosSearch className='w-5 h-5'/>
            </div>
            {/* patients div */}
            <Patients/>
        </div>
        <div className=' bg-white flex-grow-2'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex neque veniam dignissimos quas quidem, aliquam ipsa quod recusandae praesentium hic!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, facilis enim? Sunt laboriosam eius veritatis ut nesciunt mollitia molestias necessitatibus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi saepe quasi totam quibusdam quaerat eveniet tempora asperiores error alias ipsum!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus totam similique a repellendus. Ut ea nisi adipisci assumenda perferendis vero.
        </div>
        <div className=' bg-white flex-grow-1'>
            <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex neque veniam dignissimos quas quidem, aliquam ipsa quod recusandae praesentium hic!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, facilis enim? Sunt laboriosam eius veritatis ut nesciunt mollitia molestias necessitatibus?
            
            </p>
        </div>
    </div>
    </div>
  )
}
