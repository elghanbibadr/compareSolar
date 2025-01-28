import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/SolarLocal Icon+logo.png";
import React from "react";

const Navbar = () => {
  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#whyUs", label: "Why us" },
    { href: "#energySavings", label: "Energy Savings" },
    { href: "#solarEssentials", label: "Solar Essentials" },
  ];

  return (
    <div className="flex justify-between max-w-[1300px] mx-auto items-center">
      <span className="inline-flex w-fit items-center">
        <Image
          className="w-auto relative right-4 md:right-7 h-[46px] md:h-[80px]"
          src={logo}
          alt="solar logo"
          width={200}
          height={100}
        />
      </span>
      <ul className="text-darkshadegray hidden md:flex cursor-pointer w-full text-nowrap items-center justify-center gap-x-3 lg:gap-x-10 text-sm lg:text-base">
        {navLinks.map((link) => (
          <li key={link.href} className="hover:text-[#FBB724]">
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

      <div>
        <Link href="/questions">
          <button className="compareNowButtonGradient text-nowrap px-6 py-3 lg:px-10 lg:py-4">
            Compare Solar Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
