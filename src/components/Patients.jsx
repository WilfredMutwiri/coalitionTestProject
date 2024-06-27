import React from 'react'
import { FaEllipsis } from "react-icons/fa6";
import EmilyImg from '../images/Layer 8.png'
import RyanImg from '../images/Layer 1.png'
import BrandonImg from '../images/Layer 3.png'
import JessicaImg from '../images/Layer 2.png'
import SamanthaImg from '../images/Layer 6.png'
import AshlayImg from '../images/Layer 12.png'
import OliviaImg from '../images/Layer 10.png'
import TylorImg from '../images/Layer 9.png'
import KevinImg from '../images/Layer 4.png'
import DylanImg from '../images/Layer 5.png'
import NathanImg from '../images/Layer 7.png'
import MikeImg from '../images/pexels-photo-1222271.png'
export default function 
() {
  return (
    <div className='max-h-screen overflow-y-scroll p-2'>
        <div className='flex flex-col gap-3 pt-4'>
            <div className='flex justify-between'>
                    <div className='flex gap-2'>
                    <img src={EmilyImg} alt='patientImg'/>
                    <h2 className='font-semibold'>
                        Emily Williams<br/>
                        <span className='font-light'>Female, 18</span>
                    </h2>
                    </div>
                    <FaEllipsis className='w-5 h-5'/>
                </div>
                <div className='flex justify-between'>
                    <div className='flex gap-2'>
                    <img src={RyanImg} alt='patientImg'/>
                    <h2 className='font-semibold'>
                        Ryan Johnson<br/>
                        <span className='font-light'>Male, 45</span>
                    </h2>
                    </div>
                    <FaEllipsis className='w-5 h-5'/>
                </div>
                <div className='flex justify-between'>
                    <div className='flex gap-2'>
                    <img src={BrandonImg} alt='patientImg'/>
                    <h2 className='font-semibold'>
                        Brandon Mitchell<br/>
                        <span className='font-light'>Male, 36</span>
                    </h2>
                    </div>
                    <FaEllipsis className='w-5 h-5'/>
                </div>
                <div className='flex justify-between'>
                    <div className='flex gap-2'>
                    <img src={JessicaImg} alt='patientImg'/>
                    <h2 className='font-semibold'>
                        Jessica Taylor<br/>
                        <span className='font-light'>Female, 28</span>
                    </h2>
                    </div>
                    <FaEllipsis className='w-5 h-5'/>
                </div>
                <div className='flex justify-between'>
                    <div className='flex gap-2'>
                    <img src={SamanthaImg} alt='patientImg'/>
                    <h2 className='font-semibold'>
                        Samantha Johnson<br/>
                        <span className='font-light'>Female, 56</span>
                    </h2>
                    </div>
                    <FaEllipsis className='w-5 h-5'/>
                </div>
                <div className='flex justify-between'>
                    <div className='flex gap-2'>
                    <img src={AshlayImg} alt='patientImg'/>
                    <h2 className='font-semibold'>
                        Ashlay Martinez<br/>
                        <span className='font-light'>Female, 54</span>
                    </h2>
                    </div>
                    <FaEllipsis className='w-5 h-5'/>
                </div>
                <div className='flex justify-between'>
                    <div className='flex gap-2'>
                    <img src={OliviaImg} alt='patientImg'/>
                    <h2 className='font-semibold'>
                        Olivia Brown<br/>
                        <span className='font-light'>Female, 52</span>
                    </h2>
                    </div>
                    <FaEllipsis className='w-5 h-5'/>
                </div>
                <div className='flex justify-between'>
                    <div className='flex gap-2'>
                    <img src={TylorImg} alt='patientImg'/>
                    <h2 className='font-semibold'>
                        Tyler Davis<br/>
                        <span className='font-light'>Male, 19</span>
                    </h2>
                    </div>
                    <FaEllipsis className='w-5 h-5'/>
                </div>
                <div className='flex justify-between'>
                    <div className='flex gap-2'>
                    <img src={KevinImg} alt='patientImg'/>
                    <h2 className='font-semibold'>
                        Kevin Anderson<br/>
                        <span className='font-light'>Male, 30</span>
                    </h2>
                    </div>
                    <FaEllipsis className='w-5 h-5'/>
                </div>
                <div className='flex justify-between'>
                    <div className='flex gap-2'>
                    <img src={DylanImg} alt='patientImg'/>
                    <h2 className='font-semibold'>
                        Dylan Thompson<br/>
                        <span className='font-light'>Male, 36</span>
                    </h2>
                    </div>
                    <FaEllipsis className='w-5 h-5'/>
                </div>
                <div className='flex justify-between'>
                    <div className='flex gap-2'>
                    <img src={NathanImg} alt='patientImg'/>
                    <h2 className='font-semibold'>
                        Nathan Evans<br/>
                        <span className='font-light'>Male, 58</span>
                    </h2>
                    </div>
                    <FaEllipsis className='w-5 h-5'/>
                </div>
                <div className='flex justify-between'>
                    <div className='flex gap-2'>
                    <img src={MikeImg} alt='patientImg'/>
                    <h2 className='font-semibold'>
                        Mike Nolan<br/>
                        <span className='font-light'>Male, 31</span>
                    </h2>
                    </div>
                    <FaEllipsis className='w-5 h-5'/>
                </div>
            </div>
    </div>
  )
}
