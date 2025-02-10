"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import logo from "@/public/images/SolarLocal Iconlogo.webp";
import hamburgerMenu from "@/public/images/icons8-hamburger-menu.svg";
import closeIcon from "@/public/images/icon-close.svg"; // Add a close icon image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#whyUs", label: "Why us" },
    { href: "#energySavings", label: "Energy Savings" },
    { href: "#solarEssentials", label: "Solar Essentials" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
