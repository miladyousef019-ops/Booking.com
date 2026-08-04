import { FiMenu } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import United from '../assets/Us@3x.png'
import { CiCircleQuestion } from "react-icons/ci";

import { LuBedSingle } from "react-icons/lu";
import { IoAirplaneOutline } from "react-icons/io5";
import { MdOutlineDirectionsCarFilled } from "react-icons/md";
import { MdOutlineAttractions } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { LuUserRound } from "react-icons/lu";
import { useState } from "react";

import {Link} from 'react-router-dom'

const Header = () => {
  const [isChecked , setIsChecked] = useState(false)
  return (
    <div className="">
      <div className='w-full bg-blue-900 h-[420px]'>

        <div className="w-full mx-3 lg:w-[1100px] lg:m-auto ">
          
          <div className="flex justify-between py-6">
            <div><h2 className='text-xl text-white lg:text-2xl lg:font-bold'>Booking.com</h2></div>
            <div className="flex gap-6 pr-8 lg:hidden">
              <CgProfile className='text-white text-2xl' />
              <FiMenu className='text-white text-2xl' />
            </div>
            <div className="hidden lg:flex items-center gap-[9px]">
              <button className="text-white text-xl font-bold hover:bg-[#999] hover:bg-opacity-30 h-[50px] w-[60px] rounded-md">EGP</button>
              <button className=" hover:bg-[#999] hover:bg-opacity-30 h-[50px] w-[50px] rounded-md flex justify-center items-center">
                <img src={United} className="h-[30px] w-[30px] rounded-full " />
              </button>
              <button className=" hover:bg-[#999] hover:bg-opacity-30 h-[50px] w-[50px] rounded-md flex justify-center items-center"><CiCircleQuestion className='text-white text-3xl' /></button>
              <button className="text-white text-l font-semibold hover:bg-[#999] hover:bg-opacity-30 h-[50px] w-[170px] rounded-md">List ypur Property</button>
              <button className="bg-white px-2 py-1.5 rounded-sm border-blue-600 border-[2px] text-blue-600 font-semibold transition-transform duration-100  ease-in-out active:scale-x-95 active:scale-y-105 ">Register</button>
              <button className="bg-white px-2 py-1.5 rounded-sm border-blue-600 border-[2px] text-blue-600 font-semibold transition-transform duration-100  ease-in-out active:scale-x-95 active:scale-y-105 ">Login</button>
            </div>
          </div>

          <div className="text-white flex items-center justify-start gap-1 ">
            <div className=" flex justify-center items-center gap-3 pl-3 pr-4 py-2  hover:bg-[#999] hover:bg-opacity-20 rounded-full ">
              <LuBedSingle className="text-xl" />
              <h4 className="text-sm">Stays</h4>
            </div>

            <div className=" flex justify-center items-center gap-3 pl-3 pr-4 py-2  hover:bg-[#999] hover:bg-opacity-20 rounded-full ">
              <IoAirplaneOutline className="text-xl" />
              <h4 className="text-sm">Flights</h4>
            </div>

            <div className=" flex justify-center items-center gap-3 pl-3 pr-4 py-2  hover:bg-[#999] hover:bg-opacity-20 rounded-full ">
              <MdOutlineDirectionsCarFilled className="text-xl" />
              <h4 className="text-sm">Car rental</h4>
            </div>

            <div className=" flex justify-center items-center gap-3 pl-3 pr-4 py-2  hover:bg-[#999] hover:bg-opacity-20 rounded-full ">
              <MdOutlineAttractions className="text-xl" />
              <h4 className="text-sm">Attractions</h4>
            </div>

           
            
          </div>

          <div className="mt-[90px] text-white">
            <h1 className="text-5xl font-bold">Find your next stay</h1>
            <h2 className="pt-5 text-2xl">Search deals on hotels, homes, and much more...</h2>
          </div>

         
        </div>
         

    </div>

    <div className="w-full mx-3 lg:w-[1100px] lg:m-auto h-52 bg-white translate-y-[-44px] z-10 rounded-md  ">

        <div className="flex items-center py-2 px-3 gap-3 w-full border-yellow-500 border-[3px] rounded-md rounded-b-none">
          <div className=""><LuBedSingle className="text-xl text-gray-700" /></div>
          <div className="text-gray-600">
            <h5 className="text-sm">Enter destraction</h5>
            <input type="text" placeholder="Wheare are you going ?" className="text-gray-700 outline-none" />
          </div>
        </div>

        <div className="flex items-center py-2 px-3 gap-3 w-full border-yellow-500 border-[3px] rounded-md border-t-0 border-b-0 rounded-b-none rounded-t-none">
          <div className=""><MdDateRange className="text-xl text-gray-700" /></div>
          <div className="text-gray-600">
            <h5 className="text-sm">Select dates</h5>
            <input type="text" placeholder="Check-in - Check-out date" className="text-gray-700 outline-none placeholder:text-black placeholder:text-sm placeholder:font-medium " />
          </div>
        </div>

        <div className="flex items-center py-2 px-3 gap-3 w-full border-yellow-500 border-[3px] rounded-md rounded-t-none rounded-b-none">
          <div className=""><LuUserRound  className="text-xl text-gray-700" /></div>
          <div className="text-gray-600">
            <h5 className="text-sm">Select ocupancy</h5>
            <input type="text" placeholder="Wheare are you going ?" className="text-gray-700 outline-none" />
          </div>
        </div>

        <div className="flex items-center justify-center text-white bg-blue-600 text-xl py-3 px-3 gap-3 w-full border-yellow-500 border-[3px] rounded-md rounded-t-none border-t-0 transti hover:bg-blue-700">
          <button className="flex items-center justify-center">Search</button>
        </div>
    </div>
    <h2 className='hidden lg:block pl-2 text-4xl font-bold text-gray-900 pb-8 w-full mx-3 lg:w-[1100px] lg:m-auto' >Why Booking.com?</h2>


   </div>
  )
}

export default Header