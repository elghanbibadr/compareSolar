
import React from 'react';
import brand1 from "@/public/images/logo-lg.png";
import brand2 from "@/public/images/logo-sunpower.png";
import brand3 from "@/public/images/logo-qcelis.png";
import brand4 from "@/public/images/logo-canadian.png";
import brand5 from "@/public/images/logo-Jinko.png";
import brand6 from "@/public/images/logo-trinasolar.png";
import brand7 from "@/public/images/logo-rec.png";
import brand8 from "@/public/images/logo-fronius.png";
import brand9 from "@/public/images/logo-solaredge.png";
import brand10 from "@/public/images/logo-sma.png";
import brand11 from "@/public/images/logo-delta.png";
import brand12 from "@/public/images/logo-abb.png";
import brand13 from "@/public/images/logo-enphase.png";
import brand14 from "@/public/images/logo-schneider.png";

import Image from 'next/image';

const BrandsWeWorkWith = () => {
  return (
    <div className="text-center mt-16">
      <h2 className="font-bold text-xl md:text-[32px] leading-[120%] text-center tracking-[-0.01em] text-[#333333]">
        Brands we work with
      </h2>
      <div className="grid grid-cols-2 md:w-[80%] mx-auto sm:grid-cols-3  md:grid-cols-4 xl:grid-cols-7 lg:grid-cols-6 gap-4 mt-6 justify-center items-center p-4">
        <Image className="mx-auto" height={90} width={90} src={brand2} alt="Brand logo 2" />
        <Image className="mx-auto" height={90} width={90} src={brand1} alt="Brand logo 1" />
        <Image className="mx-auto" height={90} width={90} src={brand3} alt="Brand logo 3" />
        <Image className="mx-auto" height={90} width={90} src={brand4} alt="Brand logo 4" />
        <Image className="mx-auto" height={90} width={90} src={brand5} alt="Brand logo 5" />
        <Image className="mx-auto" height={90} width={90} src={brand6} alt="Brand logo 6" />
        <Image className="mx-auto" height={90} width={90} src={brand7} alt="Brand logo 7" />
        <Image className="mx-auto" height={90} width={90} src={brand8} alt="Brand logo 8" />
        <Image className="mx-auto" height={90} width={90} src={brand9} alt="Brand logo 9" />
        <Image className="mx-auto" height={90} width={90} src={brand10} alt="Brand logo 10" />
        <Image className="mx-auto" height={90} width={90} src={brand11} alt="Brand logo 11" />
        <Image className="mx-auto" height={90} width={90} src={brand12} alt="Brand logo 12" />
        <Image className="mx-auto" height={90} width={90} src={brand13} alt="Brand logo 13" />
        <Image className="mx-auto" height={90} width={90} src={brand14} alt="Brand logo 14" />
      </div>
      <button className='gradientButton text-white mt-10 font-medium p-2 px-6 rounded-sm text-sm'>And more</button>
    </div>
  );
};

export default BrandsWeWorkWith;
