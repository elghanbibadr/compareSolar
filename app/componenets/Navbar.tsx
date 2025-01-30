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
    <div className="flex justify-between max-w-[1300px] mx-auto items-center p-4">
      {/* Logo */}
      <span className="inline-flex w-fit items-center">
        <Image
          className="w-auto relative right-4 md:right-7 h-[50px] md:h-auto"
          src={logo}
          alt="solar logo"
          width={200}
          height={100}
        />
      </span>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex cursor-pointer text-darkshadegray w-full text-nowrap items-center justify-center gap-x-6 lg:gap-x-10 text-sm lg:text-base">
        {navLinks.map((link) => (
          <li key={link.href} className="hover:text-[#FBB724]">
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

      {/* Desktop Button */}
      <div className="hidden md:block">
        <Link href="/questions">
          <button className="compareNowButtonGradient text-nowrap px-6 py-3 lg:px-10 lg:py-4">
            Compare Solar Now
          </button>
        </Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <Image
          src={hamburgerMenu}
          className="cursor-pointer"
          height={22}
          width={22}
          alt="hamburger menu"
          onClick={() => setIsOpen(true)}
        />
      </div>

      {/* Mobile Sidebar with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }} // Closing animation
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full w-[75%] max-w-[300px] bg-white  shadow-lg z-50 flex flex-col p-5"
          >
            {/* Close Button */}
            <div className="flex mt-4 justify-end">
              <Image
                src={closeIcon}
                className="cursor-pointer"
                height={20}
                width={20}
                alt="close menu"
                onClick={() => setIsOpen(false)}
              />
            </div>

            {/* Mobile Navigation */}
            <ul className="mt-10 flex flex-col space-y-7 text-base">
              {navLinks.map((link) => (
                <li
                  key={link.href}
                  className="hover:text-[#FBB724] text-darkshadegray"
                >
                  <Link href={link.href} onClick={() => setIsOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Button */}
            <div className="mt-10">
              <Link href="/questions">
                <button
                  className="compareNowButtonGradient text-nowrap px-6 py-3 w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Compare Solar Now
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
