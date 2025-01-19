import Image from 'next/image'
import React from 'react'
import logo from "@/public/images/SolarLocal Logo Files/SolarLocal Logo_black.svg";
import Quiz from '../componenets/Quiz';


const QuestionsPage = () => {
  return (
    <div>
        <div className="flex justify-between gradient4 p-3  items-center">
          <span className="inline-flex w-fit items-center">
          
            <Image
              className="w-auto h-[42px] md:h-[80px]"
              src={logo}
              alt="solar logo"
              width={200}
              height={100}
            />
          </span>
          <div>
            <button className="gradientButton p-2 px-3 text-xs font-medium tracking--tight text-nowrap capitalize text-white md:text-[1.1rem] md:font-semibold md:p-4 rounded-[4px]">
              Compare Solar Now
            </button>
          </div>
        </div>
        <Quiz />
    </div>
  )
}

export default QuestionsPage