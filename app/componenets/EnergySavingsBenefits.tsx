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
        We love showing people how to save money on their energy bills
      </h2>

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
            COVID-19 has meant we’re all using more energy at home during the
            day
          </p>
        </div>

        {/* Benefit 3 */}
        <div className="flex flex-col items-center">
          <div className="text-green-500 text-6xl mb-4">
            <Image src={icon3} alt="icon 3" />
          </div>
          <p className="text-base md:text-lg text-[#015EB3] font-semibold md:w-[80%] md:mx-auto">
            So solar now offers greater savings and faster pay-back than ever
            before
          </p>
        </div>
      </div>
    </section>
  );
};

export default EnergySavingsBenefits;
