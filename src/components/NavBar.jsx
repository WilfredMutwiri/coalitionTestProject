import React from 'react'
import logo from '../images/TestLogo.svg'
import { VscHome } from "react-icons/vsc";
import { LuUsers } from "react-icons/lu";
import { GoCalendar } from "react-icons/go";
import { FiMessageSquare } from "react-icons/fi";
import { IoMdCard } from "react-icons/io";
import navUserImg from '../images/navUserImg.png'
import { IoSettingsOutline } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";

export default function NavBar() {
  return (
    <div className='bg-gray-100 w-full p-3'>
        <div className='bg-gray-50 p-2 flex justify-between rounded-full'>
            <div>
                <img className='h-10' src={logo} alt='Testlogo'/>
            </div>
            <div>
                <ul className='flex gap-4'>
                    <li className='navLi'>
                    <VscHome className='navLiIcons'/>
                    Overview
                    </li>
                    <li className='navLi'>
                    <LuUsers className='navLiIcons'/>
                    Patients
                    </li>
                    <li className='navLi'>
                    <GoCalendar className='navLiIcons'/>
                    Schedule
                    </li>
                    <li className='navLi'>
                    <FiMessageSquare className='navLiIcons'/>
                    Message
                    </li>
                    <li className='navLi'>
                    <IoMdCard className='navLiIcons'/>
                    Transactions
                    </li>
                </ul>
            </div>
            <div className='flex gap-2'>
                <img className='w-10 h-10 object-fill' src={navUserImg} alt='userImage'/>
                <h2 className='font-semibold'>
                    Dr.Jose Simmons<br/>
                    <span className='font-normal text-sm'>General Practitioner</span>
                </h2>
                <div className='flex p-2 mt-2'>
                    <IoSettingsOutline className='navLiIcons'/>
                    <CiMenuKebab className='navLiIcons'/>
                </div>
            </div>
        </div>
    </div>

  )
}
