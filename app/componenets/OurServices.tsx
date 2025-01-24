import React from "react";
import compare from "@/public/images/icons/Compare.svg";
import enterDetails from "@/public/images/icons/Enter-Details.svg";
import applyOnline from "@/public/images/Apply-Online.svg";

import Image from "next/image";

const OurServices = () => {
  return (
    <div className="bg-[#F0F0F0] p-4 pt-16 py-12 md:py-20">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="font-bold mb-10 text-[1.3rem] md:text-[32px] leading-[120%] text-center tracking-[-0.01em] text-[#333333]">
          How our service works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-center">
          <div>
            <Image
              className="mx-auto"
              src={enterDetails}
              alt="compare logo"
              height={80}
              width={80}
            />
            <h3 className="mt-3 text-[1.05rem] mb-6 leading-relaxed md:w-[80%] mx-auto tracking-tight font-medium md:text-xl md:leading-relaxed text-center md:tracking-tight text-[#FFBA4A]">
              1. Tell Us What You Need

            </h3>
            <h6 className="leading-[160%]  md:w-[80%] mx-auto text-sm  md:text-[1.01rem] text-center tracking-tight text-[#333333] mt-3">
            Answer a few quick questions so we can understand your requirements.


            </h6>
          </div>
          <div>
            <Image
              className="mx-auto"
              src={compare}
              alt="compare logo"
              height={80}
              width={80}
            />
            <h3 className="mt-3 text-[1.05rem] mb-6 leading-relaxed md:w-[80%] mx-auto tracking-tight font-medium md:text-xl md:leading-relaxed text-center md:tracking-tight text-[#FFBA4A]">
              2. Receive 3 Local Quotes

            </h3>
            <h6 className="leading-[160%]  md:w-[80%] mx-auto text-sm  md:text-[1.01rem] text-center tracking-tight text-[#333333] mt-3">
            Our free service connects you with local suppliers to provide competitive quotes.
             </h6>
          </div>
          <div>
            <Image
              className="mx-auto"
              src={applyOnline}
              alt="compare logo"
              height={80}
              width={80}
            />
            <h3 className="mt-3 text-[1.05rem] mb-6 leading-relaxed md:w-[80%] mx-auto tracking-tight font-medium md:text-xl md:leading-relaxed text-center md:tracking-tight text-[#FFBA4A]">
              3. Pick Your Perfect Deal

            </h3>
            <h6 className="leading-[160%]  md:w-[80%] mx-auto text-sm  md:text-[1.01rem] text-center tracking-tight text-[#333333] mt-3">
            Once you find the best match, apply online or let us handle the setup for you.

</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
