import React from "react";

const Callout = () => {
  return (
    <div className=" gradient3">
      <div className=" max-w-[1300px] mx-auto p-6 text-center gap-3 grid grid-cols-1 justify-center items-center  md:grid-cols-2">
        <h2 className="text-white text-center  justify-end justify-self-end md:text-nowrap md:text-2xl font-semibold">
        Compare the Best Solar Deals for Your Home
        </h2>
        <div className=" ">
            <button className=" bg-[#FFBA4A] md:text-xl   text-white px-10 py-4 rounded-md font-bold ">
              Find deals now
            </button>
        </div>
      </div>
    </div>
  );
};

export default Callout;
