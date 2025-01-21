import Image from 'next/image'
import React from 'react'
import logo from "@/public/images/SolarLocal Logo Files/SolarLocal Logo_coloured.png";
import Quide2 from "@/public/images/guide-2.png";

import Quiz from '../componenets/Quiz';


const QuestionsPage = () => {
  return (
    <div>
        <div className="flex justify-between gradient4 p-3 md:p-1  items-center">
          <span className="inline-flex w-fit items-center">
          
            <Image
              className="w-auto h-[42px] md:h-[80px]"
              src={logo}
              alt="solar logo"
              width={200}
              height={100}
            />
          </span>
          <div className='flex  items-center '>
            <span className=' w-[330px] gradient6 hidden md:inline-flex  rounded-md px-2  gap-x-3'>
              <Image className='hidden w-[55px] relative top-2  transform [rotate:-4deg] [translate-y:-7px]" md:block' src={Quide2} alt='hero image' height={30} width={100} />
              <h4 className='text-[#015EB3] self-center text-[14px] text-wrap font-bold'>You have qualified for our FREE
              10 Solar Tips to save money guide</h4>
            </span>
            <button className="gradientButton md:hidden p-2 px-3 text-xs font-medium tracking--tight text-nowrap capitalize text-white md:text-[1.1rem] md:font-semibold md:p-4 rounded-[4px]">
              Compare Solar Now
            </button>
          </div>
        </div>
        <Quiz />
    </div>
  )
}

export default QuestionsPage