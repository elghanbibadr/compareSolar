import React from "react";
import compare from "@/public/images/icons/Compare.svg";
import enterDetails from "@/public/images/icons/Enter-Details.svg";
import applyOnline from "@/public/images/Apply-Online.svg";

import Image from "next/image";

const OurServices = () => {
  return (
    <div className="bg-[#15a5e314] p-4 mt-16 py-12 md:py-20">
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
          <h3 className="mt-3 text-base mb-6 leading-relaxed md:w-[80%] mx-auto tracking-tight font-semibold md:text-xl md:leading-relaxed text-center md:tracking-tight text-[#015EB3]">
            1. Tell Us What You’re Looking For
          </h3>
          <h6 className="leading-[160%] md:w-[80%] mx-auto text-[0.9rem] md:text-base text-center tracking-tight text-[#333333] mt-3">
            We’ll ask you some questions to better understand your needs.
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
          <h3 className="mt-3 text-base mb-6 leading-relaxed md:w-[80%] mx-auto tracking-tight font-semibold md:text-xl md:leading-relaxed text-center md:tracking-tight text-[#015EB3]">
            2. Get 3 Quotes From Local Installers
          </h3>
          <h6 className="leading-[160%] md:w-[80%] mx-auto text-[0.9rem] md:text-base text-center tracking-tight text-[#333333] mt-3">
          Our free service instantly alerts local suppliers for quotes to get your job done.          </h6>
        </div>
        <div>
          <Image
            className="mx-auto"
            src={applyOnline}
            alt="compare logo"
            height={80}
            width={80}
          />
          <h3 className="mt-3 text-base mb-6 leading-relaxed md:w-[80%] mx-auto tracking-tight font-semibold md:text-xl md:leading-relaxed text-center md:tracking-tight text-[#015EB3]">
            3. You Choose The Best Deal{" "}
          </h3>
          <h6 className="leading-[160%] md:w-[80%] mx-auto text-[0.9rem] md:text-base text-center tracking-tight text-[#333333] mt-3">
          When you’ve found the policy that’s right for you, apply online or give us a call and we’ll set up everything for you.          </h6>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
