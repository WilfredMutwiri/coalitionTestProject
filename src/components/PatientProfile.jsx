import React from 'react'
import JessicaImg from '../images/Layer 2.png'
import {Button} from 'flowbite-react'
import { CiCalendar } from "react-icons/ci";
import { BsGenderFemale } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { LuShieldCheck } from "react-icons/lu";
import { MdOutlineFileDownload } from "react-icons/md";


export default function PatientProfile() {
  return (
    <div className='w-auto rounded-md'>
        <div className='bg-white rounded-md p-3'>
           <img className='mx-auto h-32 pt-4 pb-4' src={JessicaImg} alt='patientProfilePic'/>
           <h2 className='font-semibold text-center p-3'>Jessica Taylor</h2> 
           <div className='flex flex-col gap-4'>
            <div className='flex gap-4'>
                <CiCalendar className='w-5 h-5'/>
                <div>
                <h2 className='text-sm'>Date of Birth</h2>
                <h2 className='font-semibold'>August 23, 1996</h2>
                </div>
            </div>
            <div className='flex gap-4'>
                <BsGenderFemale className='w-5 h-5'/>
                <div>
                <h2 className='text-sm'>Gender</h2>
                <h2 className='font-semibold'>Female</h2>
                </div>
            </div>
            <div className='flex gap-4'>
                <FaPhoneAlt className='w-5 h-5'/>
                <div>
                <h2 className='text-sm'>Contact Info.</h2>
                <h2 className='font-semibold'>(415)555-1234</h2>
                </div>
            </div>
            <div className='flex gap-4'>
                <FaPhoneAlt className='w-5 h-5'/>
                <div>
                <h2 className='text-sm'>Emergency Contacts</h2>
                <h2 className='font-semibold'>(415)555-5678</h2>
                </div>
            </div>
            <div className='flex gap-4'>
                <LuShieldCheck className='w-5 h-5'/>
                <div>
                <h2 className='text-sm'>Insuarance Provider</h2>
                <h2 className='font-semibold'>Sunrise Health Assuarance</h2>
                </div>
            </div>
            <Button className='rounded-full'>Show All Information</Button>
           </div>
        </div>
        {/* lab results div */}
        <div className='mt-4 bg-white rounded-md p-3'>
            <h2 className='p-3 font-semibold text-lg'>Lab Results</h2>
            <ul className='flex flex-col gap-3 h-28 overflow-scroll'>
                <li className='flex gap-4 justify-between'>Blood Tests <span><MdOutlineFileDownload className='w-5 h-5'/></span></li>
                <li className='flex gap-4 justify-between'>CT Scans <span> <MdOutlineFileDownload className='w-5 h-5'/></span></li>
                <li className='flex gap-4 justify-between'>Radiology Reports <span> <MdOutlineFileDownload className='w-5 h-5'/></span></li>
                <li className='flex gap-4 justify-between'>X-Rays <span> <MdOutlineFileDownload className='w-5 h-5'/></span></li>
                <li className='flex gap-4 justify-between'>Urine Test <span> <MdOutlineFileDownload className='w-5 h-5'/></span></li>
            </ul>
        </div>
    </div>
  )
}
