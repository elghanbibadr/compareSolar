"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/SolarLocal Iconlogo.webp";

const Navbar = () => {

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#whyUs", label: "Why us" },
    { href: "#energySavings", label: "Energy Savings" },
    { href: "#solarEssentials", label: "Solar Essentials" },
  ];



  return (
    <div className="flex justify-between max-w-[1300px]  md:px-6 mx-auto items-center p-2 md:p-4">
      {/* Logo */}
      <Image
        className=" relative right-6 h-10 sm:h-auto  "
        src={logo}
        alt="solar logo"
        width={200}
        height={100}
      />
      {/* Desktop Navigation */}
      <ul className="hidden md:flex cursor-pointer text-darkshadegray w-full text-nowrap items-center justify-center gap-x-6 lg:gap-x-10 text-sm lg:text-base">
        {navLinks.map((link) => (
          <li key={link.href} className="hover:text-[#FBB724]">
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

      {/* Desktop Button */}
      <div className="">
        <Link href="/questions">
          <button className="compareNowButtonGradient font-normal md:text-nowrap text-xs px-4 py-2 md:px-6 md:py-3 lg:px-10 lg:py-4">
            Compare Solar Now
          </button>
        </Link>
      </div>

    </div>
  );
};

export default Navbar;
