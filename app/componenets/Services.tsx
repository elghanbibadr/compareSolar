import React from 'react'
import billDrop from "@/public/images/Bill-Drop.png"
import Image from 'next/image'
const Services = () => {
  return (
    <section className="gradient3 mt-20 grid grid-cols-1 justify-center md:gap-x-6 items-center md:h-fit md:grid-cols-2  text-white py-10 md:py-2 px-6 md:px-16">
    <div className='md:order-2'>
        <div className="text-center md:text-left mb-8">
          <h2 className="text-2xl md:text-4xl font-bold">A Service Like No Other</h2>
          <p className="text-lg md:text-xl font-semibold mt-2 md:mt-6">
            The way we do things around here:
          </p>
        </div>
        <ul className="list-disc p-0 m-0 space-y-2 text-center md:text-left text-sm md:text-base max-w-2xl mx-auto">
          <li>
            We’ve got registered solar installers Australia-wide
          </li>
          <li>
            Our service is free-to-use and 100% obligation-free
          </li>
          <li>
            Receive 3 free quotes from our trusted network of installers
          </li>
          <li>
            The people you speak to want to help you save on your energy bills.
          </li>
        </ul>
    </div>
    <div className="flex md:order-1  top-16 justify-center relative ">
      <Image
        src={billDrop} // Replace with your image path
        alt="Energy Bill Example"
       
        className="max-w-full md:h-full md:w-full h-auto "
      />
    </div>
  </section>
  )
}

export default Services