import Image from 'next/image'
import Link from 'next/link'
import logo from "@/public/images/SolarLocal Icon+logo.png";
import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between max-w-[1300px] mx-auto  items-center">
    <span className="inline-flex w-fit items-center">
      <Image
        className="w-auto relative right-4 md:right-7 h-[46px] md:h-[80px]"
        src={logo}
        alt="solar logo"
        width={200}
        height={100}
      />
    </span>
    <ul className='text-darkshadegray hidden md:flex cursor-pointer  items-center gap-x-10 text-base '>
        <li className="hover:text-[#FBB724]"><Link href="#services">Services</Link></li>
        <li className="hover:text-[#FBB724]"><Link href="#whyUs">Why us</Link></li>
        <li className="hover:text-[#FBB724]"><Link href="#energySavings">Energy Savings</Link></li>
        <li className="hover:text-[#FBB724]"><Link href="#solarEssentials">Solar Essentials</Link></li>

    </ul>
    <div>
      <Link href="/questions">
        <button className="compareNowButtonGradient px-6 py-3 md:px-10 md:py-4">
          Compare Solar Now
        </button>
      </Link>
    </div>
  </div>
  )
}

export default Navbar