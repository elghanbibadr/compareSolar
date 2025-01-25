import React from "react";
import step1 from "@/public/images/icons/Savings.svg";
import step2 from "@/public/images/icons/Group.svg";
import step3 from "@/public/images/icons/Group-19.svg";
import step4 from "@/public/images/icons/locationWhite.svg";
import Image from "next/image";


const steps = [
  {
    icon: step1,
    title: "we calculate your savings",
    description: "See how much switching to solar could save you.",
  },
  {
    icon: step2,
    title: "we estimate your new energy bill",
    description: "Tailored to your home and energy usage.",
  },
  {
    icon: step3,
    title: "we calculate your payback period",
    description: "Showing you the real value of going solar.",
  },
  {
    icon: step4,
    title: "we offer the best options",
    description: "You pick the installer that suits you best.",
  },
];

const WhyChoseUs = () => {
  return (
    <div className="pt-24 bg-white mb-10 p-4 max-w-[1300px] mx-auto">
      <h2 className=" mt-2 text-3xl font-extrabold tracking-tight text-darkshadegray text-center mb-10 sm:text-4xl">
        Why people use our service
      </h2>
      <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-4 my-10 gap-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-darkshadegray text-white p-5 rounded-md text-center "
          >
            {/* <div className="text-3xl mb-4">{step.icon}</div> */}
            <Image  className="mx-auto mb-6" src={step.icon} height={50} width={50} alt="step icon" />
            <h3 className="font-semibold text-nowrap text-base md:text-lg mb-2">{step.title}</h3>
            <p className="text-sm md:text-base">{step.description}</p>
          </div>
        ))}
      </div>
      <button className=" bg-gradient-to-b from-yellow-400 to-orange-400 mt-8  block text-white px-10 py-4 rounded-md font-bold ">
      Compare Solar Now      </button>
    </div>
    </div>

  );
};

export default WhyChoseUs;
