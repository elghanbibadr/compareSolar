"use client";
import { useState } from "react";

const articles = [
  {
    title: "How many solar panels do I need?",
    content:
      "The number of panels depends on your energy consumption and panel efficiency. A 6.6 kW system, with around 16–20 panels, is ideal for an average family of 4–5 people in a typical home, covering most daytime electricity needs.",
  },
  {
    title: "What's the average cost of solar panels?",
    content:
      "Prices vary by location and system quality. On average, a 5 kW system costs around $5,000 in most major Australian cities, including Sydney, Melbourne and Brisbane.",
  },
  {
    title: "What Australian government rebates are there for solar?",
    content: `Australian homeowners can claim up to $2,133 in rebates, reducing the upfront cost of solar systems. The exact amount depends on your location and system size.`,
  },
  {
    title: "Should I also install a battery system?",
    content:
      "Adding battery storage allows energy use after sunset. Costs range from $1,000 to $2,000 per kWh of storage capacity. For a household using 30 kWh daily, a 7 kWh battery system would be suitable.",
  },  
  {
    title: "How quickly can I get solar panels installed?",
    content:
      "Installation timelines depend on location and installer availability. After a roof inspection, installation can occur within a week and typically takes one day to complete.",
  },
  {
    title: "How long do solar panels last?",
    content:
      "With regular maintenance, solar panels last 25–40 years. Most come with a 25-year warranty, ensuring at least 80% capacity; premium panels may guarantee up to 92% after 25 years.",
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
