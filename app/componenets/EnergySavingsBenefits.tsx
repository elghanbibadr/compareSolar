import Image from "next/image";
import React from "react";
import icon1 from "@/public/images/icons/Rebate.svg";
import icon2 from "@/public/images/icons/Usage.svg";
import icon3 from "@/public/images/icons/Happy.svg";

const EnergySavingsBenefits = () => {
  const benefits = [
    {
      icon: icon1,
      title: "Unlock Solar Rebates",
      description:
        "Did you know? Government rebates are available on almost every solar installation.",
    },
    {
      icon: icon2,
      title: "Daytime Energy Savings",
      description:
        "With more people working from home, daytime energy usage at home has increased.",
    },
    {
      icon: icon3,
      title: "Faster Payback",
      description:
        "Solar now delivers bigger savings and quicker pay-back than ever.",
    },
  ];

  return (
    <section id="energySavings" className="py-6 bg-white pt-10 px-6">
      {/* Section Heading */}
      <div className="max-w-[1300px] mx-auto">
        <div className=" text-center mb-10">
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-darkshadegray text-center sm:text-4xl">
            We’re passionate about helping you cut costs on your energy bills.
          </h2>
          <p className="my-6 md:w-[70%] md:mx-auto text-textColor">
            By providing innovative solutions and expert guidance, we empower you
            to save money, reduce energy waste, and take control of your energy
            consumption—making sustainability simple and affordable.
          </p>
        </div>
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center border rounded-xl hover:bg-[#FEF7E4] duration-200 p-4 border-[#ececec] md:text-left">
              <div className="text-green-500 mb-4">
                <Image className="h-14 w-14" src={benefit.icon} alt={benefit.title} />
              </div>
              <h4 className="text-darkshadegray text-base md:text-xl font-medium">
                {benefit.title}
              </h4>
              <p className="text-textColor text-xs md:w-[90%] mt-3 md:text-base ">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnergySavingsBenefits;
