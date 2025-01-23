import Image from "next/image";
import React from "react";
import icon1 from "@/public/images/icons/Rebate.svg";
import icon2 from "@/public/images/icons/Usage.svg";
import icon3 from "@/public/images/icons/Happy.svg";

const EnergySavingsBenefits = () => {
  return (
    <section className="py-10 bg-white pt-28 px-6 text-center">
      {/* Section Heading */}
      <h2 className="text-2xl text-[#333333] md:text-3xl font-bold mb-8">
      We’re passionate about helping you cut costs on your energy bills.      </h2>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Benefit 1 */}
        <div className="flex flex-col items-center">
          <div className="text-green-500 text-6xl mb-4">
            <Image src={icon1} alt="icon 1" />
          </div>
          <p className="text-base md:text-lg text-[#015EB3] font-semibold md:w-[80%] md:mx-auto">
            Did you know? Government rebates are available on almost every solar
            installation
          </p>
        </div>

        {/* Benefit 2 */}
        <div className="flex flex-col items-center">
          <div className="text-green-500 text-6xl mb-4">
            <Image src={icon2} alt="icon 2" />
          </div>
          <p className="text-base md:text-lg text-[#015EB3] font-semibold md:w-[80%] md:mx-auto">
          With more people working from home, daytime energy usage at home has increased.
          </p>
        </div>

        {/* Benefit 3 */}
        <div className="flex flex-col items-center">
          <div className="text-green-500 text-6xl mb-4">
            <Image src={icon3} alt="icon 3" />
          </div>
          <p className="text-base md:text-lg text-[#015EB3] font-semibold md:w-[80%] md:mx-auto">
          Solar now delivers bigger savings and quicker pay-back than ever.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EnergySavingsBenefits;
