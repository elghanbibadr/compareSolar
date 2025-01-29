import Image from "next/image";
import React from "react";
import logo from "@/public/images/SolarLocal Iconlogo.webp";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-textColor py-14">
      <div className="max-w-[1300px] mx-auto px-4 flex flex-col md:flex-row md:justify-around items-center text-center md:text-left">
        {/* Heading and Description */}
        <div className="mb-6">
          <h2 className="text-xl md:text-3xl font-bold mb-2">
            {" "}
            Your trusted solar experts.
          </h2>
          <p className="">
            We make going solar easy with our 5-star service. See how much you
            can save!
          </p>
        </div>

        {/* Logo Section */}
        <div className="flex flex-col items-center">
          <span className="inline-flex w-fit items-center ">
            {/* <Image className="h-8 w-8 md:h-auto md:w-auto" src={sun} alt="solar logo" width={45} height={45} /> */}
            <Image
              className=""
              src={logo}
              alt="solar logo"
              width={200}
              height={100}
            />
          </span>

          <p className="text-gray-400 text-sm mt-2"> © 2025 SolarLocal</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
