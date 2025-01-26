import Image from 'next/image'
import Link from 'next/link'
import logo from "@/public/images/SolarLocal Icon+logo.png";
import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between p-3  items-center">
    <span className="inline-flex w-fit items-center">
      <Image
        className="w-auto h-[42px] md:h-[80px]"
        src={logo}
        alt="solar logo"
        width={200}
        height={100}
      />
    </span>
    <ul className='text-darkshadegray hidden md:flex cursor-pointer  items-center gap-x-10 text-base font-medium'>
        <li className="hover:text-[#FBB724]"><Link href="#services">Services</Link></li>
        <li className="hover:text-[#FBB724]"><Link href="#whyUs">Why us</Link></li>
        <li className="hover:text-[#FBB724]"><Link href="#energySavings">Energy Savings</Link></li>
        <li className="hover:text-[#FBB724]"><Link href="#solarEssentials">Solar Essentials</Link></li>

    </ul>
    <div>
      <Link href="/questions">
        <button className="focus-visible:outline-2 text-sm px-3  focus-visible:outline-offset-1 text-white bg-gradient-to-b from-yellow-400 to-orange-400 md:text-[1.1rem] md:font-semibold p-2 md:p-3 rounded-[4px]">
          Compare Solar Now
        </button>
      </Link>
    </div>
  </div>
  )
}

export default Navbar