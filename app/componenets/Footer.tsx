import Image from 'next/image'
import React from 'react'
import logo from "@/public/images/SolarLocal Logo Files/SolarLocal Logo_coloured.svg";

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white py-14">
      <div className="max-w-[1300px] mx-auto px-4 flex flex-col md:flex-row md:justify-around items-center text-center md:text-left">
        {/* Heading and Description */}
        <div className="mb-6">
          <h2 className="text-xl md:text-3xl font-bold mb-2">Prefer to talk to someone?</h2>
          <p className="text-[#fffc]">
            Got a specific question about solar energy? 
            Why not give us a call.
          </p>
        </div>

        {/* Phone Section */}
        {/* <div className="flex flex-col items-center justify-center mb-6">
          <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center">
            <div className="flex items-center text-lg font-bold mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5h2l.4 2M7 8h10l1-3H6.4M16 12H8m0 0v5a1 1 0 001 1h6a1 1 0 001-1v-5m-7 0h8"
                />
              </svg>
              <span>1300 660 848</span>
            </div>
            <span className="text-gray-400 text-sm">Mon 8:30am - 8:00pm</span>
          </div>
        </div> */}

        {/* Logo Section */}
        <div className="flex flex-col items-center">
        <span className="inline-flex w-fit items-center ">
          {/* <Image className="h-8 w-8 md:h-auto md:w-auto" src={sun} alt="solar logo" width={45} height={45} /> */}
          <Image className="" src={logo} alt="solar logo" width={200} height={100} />
        </span>
       
         
          <p className="text-gray-400 text-sm mt-2">© 2020 Compare Ltd.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer