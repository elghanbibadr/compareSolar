import React from "react";
import step1 from "@/public/images/icons/Savings.svg";
import step2 from "@/public/images/icons/Group.svg";
import step3 from "@/public/images/icons/Group-19.svg";
import step4 from "@/public/images/icons/Location.svg";
import Image from "next/image";


const steps = [
  {
    icon: step1,
    title: "We calculate your savings",
    description: "Find out how much you can save by going solar",
  },
  {
    icon: step2,
    title: "We estimate your new monthly bill",
    description: "Based on your home and usage profile",
  },
  {
    icon: step3,
    title: "We tell you how long pay back should take",
    description: "To show you the true value of solar",
  },
  {
    icon: step4,
    title: "Find you the best local suppliers",
    description: "Then you choose the one you like the most",
  },
];

const WhyChoseUs = () => {
  return (
    <div className="pt-24 bg-white p-4 max-w-[1300px] mx-auto">
      <h2 className="font-bold mb-10 text-[1.3rem] md:text-[32px] leading-[120%] text-center tracking-[-0.01em] text-[#333333]">
        Why people use our service
      </h2>
      <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-[#015EB3] text-white p-6 rounded-md text-center shadow-lg"
          >
            {/* <div className="text-3xl mb-4">{step.icon}</div> */}
            <Image  className="mx-auto mb-6" src={step.icon} height={40} width={40} alt="step icon" />
            <h3 className="font-bold text-base md:text-xl mb-2">{step.title}</h3>
            <p className="text-sm md:text-base">{step.description}</p>
          </div>
        ))}
      </div>
      <button className=" gradientButton2 mt-16 block text-white px-10 py-4 rounded-md font-bold ">
        Find deals now
      </button>
    </div>
    </div>

  );
};

export default WhyChoseUs;
