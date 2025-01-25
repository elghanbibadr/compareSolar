import React from "react";
import compare from "@/public/images/icons/Compare.svg";
import enterDetails from "@/public/images/icons/Enter-Details.svg";
import applyOnline from "@/public/images/Apply-Online.svg";

import Image from "next/image";

const OurServices = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-400 to-orange-400 p-4 text-white pt-16 py-12 rounded-2xl max-w-[1300px] my-8 mx-auto bg-backgroundPaleYellow px-6 py-10rounded-2xl max-w-[1300px] my-8 mx-auto bg-backgroundPaleYellow px-6 py-10 md:py-20">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-darkshadegray text-center mb-10 sm:text-4xl">
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
            <h3 className="mt-3 text-[1.05rem] mb-6 leading-relaxed md:w-[80%] mx-auto tracking-tight font-medium md:text-xl md:leading-relaxed text-center md:tracking-tight text-white">
              1. Tell Us What You Need

            </h3>
            <h6 className="leading-[160%]  md:w-[80%] mx-auto text-sm  md:text-[1.01rem] text-center tracking-tight text-darkshadegray f mt-3">
            Answer a few quick questions so we can understand your requirements.


            </h6>
          </div>
          <div>
            <Image
              className="mx-auto"
              src={compare}
              alt="compare logo"
              height={90}
              width={90}
            />
            <h3 className="mt-3 text-[1.05rem] mb-6 leading-relaxed md:w-[80%] mx-auto tracking-tight font-medium md:text-xl md:leading-relaxed text-center md:tracking-tight text-[]">
              2. Receive 3 Local Quotes

            </h3>
            <h6 className="leading-[160%]  md:w-[80%] mx-auto text-sm  md:text-[1.01rem] text-center tracking-tight text-darkshadegray f mt-3">
            Our free service connects you with local suppliers to provide competitive quotes.
             </h6>
          </div>
          <div>
            <Image
              className="mx-auto"
              src={applyOnline}
              alt="compare logo"
              height={90}
              width={90}
            />
            <h3 className="mt-3 text-[1.05rem]  mb-6 leading-relaxed md:w-[80%] mx-auto tracking-tight font-medium md:text-xl md:leading-relaxed text-center md:tracking-tight text-[]">
              3. Pick Your Perfect Deal

            </h3>
            <h6 className="leading-[160%]  md:w-[80%] mx-auto text-sm  md:text-[1.01rem] text-center tracking-tight text-darkshadegray f mt-3">
            Once you find the best match, apply online or let us handle the setup for you.

</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
