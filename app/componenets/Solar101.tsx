"use client";
import { useState } from "react";

const articles = [
  {
    title: "How many solar panels do I need?",
    content:
      "This depends on the type of panel and how much energy you use. Generally speaking, for every 10 panels, it delivers 3kW which can range from $3,500 - $5,000.",
  },
  {
    title: "What's the average cost of solar panels?",
    content:
      "The cost of solar panels depends on your location and whether you choose a budget or top-end system (and installer). On average, the cost is around $5,000 for a 5kW system installed in NSW, VIC and QLD.",
  },
  {
    title: "Should I also install a battery system?",
    content:
      "Most households will benefit a great deal from adding battery storage for the simple reason that appliances will still continue to run after the sun sets. The cost of adding a battery storage system averages between $1,000 - $2,000 per kWh of storage capacity meaning for an average family home that uses 30kWh, you need around 7kWh battery system.",
  },
  {
    title: "How quickly can I get solar panels installed?",
    content:
      "Depending on your location, product and installer availability, it can be as little as a week after roof inspection. Most installs take only 1 full day to complete with a little longer if it's a larger capacity install or adding in a battery system.",
  },
  {
    title: "How long do solar panels last?",
    content:
      "With regular expert maintenance, it should last on average 25-40 years depending on the type of panels you choose. Most panels will come with a 25 year warranty that promise its panels have at least 80% of their normal capacity, whereas the more top-end panels such as Sunpower will state at least 92% after 25 years.",
  },
  {
    title: "What Australian government rebates are there for solar?",
    content: `Each state or territory has its own incentives program for solar:
    
  1. **New South Wales (NSW)**: Up to $14,000, plus an additional $9,000 for battery systems for households with an income of up to $180,000 per year.
  
  2. **Victoria (VIC)**: Up to $1,888, plus an additional $4,838 for battery systems for households with an income below $180,000 per year and an assessed property value below $3 million.
  
  3. **Queensland (QLD)**: Interest-free loans for solar power and energy storage systems.
  
  4. **South Australia (SA)**: Up to $6,000 for energy storage, with low-interest loans available.
  
  5. **Australian Capital Territory (ACT)**: Up to $2,500 under the Solar for Low Income Program and a rebate of $825/kW for systems up to 30 kW.
  
  6. **Tasmania (TAS)**, **Western Australia (WA)**, and **Northern Territory (NT)**: No additional solar rebates or incentives.`,
  },
];

export default function Solar101() {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="p-6  pt-20 bg-[#F0F0F0] py-12">
      <h2 className="text-xl md:text-3xl font-bold text-center text-[#333333] mb-10">
        Solar 101
      </h2>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8  ">
        {articles
          .slice(0, showAll ? articles.length : 3)
          .map((article, index) => (
            <div key={index} className="">
              <h3 className="text-base md:text-xl text-[#015EB3] font-semibold mb-2">
                {article.title}
              </h3>
              <p className="text-[#484848cc] text-sm md:text-base">
                {article.content}
              </p>
            </div>
          ))}
      </div>
      <button
        onClick={() => setShowAll(!showAll)}
        className="mt-6 border-[#FFBA4A] border-2 px-6 py-2 rounded-md font-bold mx-auto bg-transparent text-[#333333] w-fit block  "
      >
        {showAll ? "Less" : "More"}
      </button>
    </div>
  );
}
