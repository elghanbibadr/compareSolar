import Image from "next/image";
import solarPowerSystemLogo from "@/public/images/icons/solarPowerSystem.svg";
import solarandbattery from "@/public/images/icons/solarandbattery.svg";
import logo from "@/public/images/SolarLocal Icon+logo.png";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative hero-wrapper">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0 hero-overlay"></div>

      {/* Header & Content */}
      <div className="relative z-10 md:p-4">
        <div className="flex justify-between p-3 mb-8 items-center">
          <span className="inline-flex w-fit items-center">
          
            <Image
              className="w-auto h-[42px] md:h-[80px]"
              src={logo}
              alt="solar logo"
              width={200}
              height={100}
            />
          </span>
          <div>
            <Link href='/questions'>
              <button className="bg-[#FFBA4A]  p-2 px-3 text-xs font-medium tracking--tight text-nowrap capitalize text-white md:text-[1.1rem] md:font-semibold md:p-4 rounded-[4px]">
                Compare Solar Now
              </button>
            </Link>
          </div>
        </div>
        <div className="md:my-14 z-20 content md:p-4 max-w-[1200px] mx-auto text-white">
  <div className="p-3 z-20">
    <h1 className="text-[1.38rem] tracking-[-0.04em] leading-[1.1] text-white text-center md:text-left font-bold md:text-[2.6rem] md:leading-[1] md:tracking-[-0.02em]">
      Find the Best Solar Energy <br className="hidden md:block" />
      Deals for Your Home
    </h1>
    <h4 className="mt-3 text-center md:text-left md:text-xl font-medium tracking-[-0.04em] text-base">
      We find you the best deals, you choose the one{" "}
      <br className="hidden md:block" />
      that’s right for you.
    </h4>
  </div>
  {/* "Start Here" Button */}
  <div className="gradientButton3 relative md:w-[400px] p-6  mt-16 md:p-8 md:rounded-md">
    <div className="absolute -top-6 left-[100px] md:left-[134px] transform -translate-x-1/2 flex items-center justify-center animate-bounce-custom">
      <div className="relative bg-[#FFB848] text-white text-sm md:text-lg font-bold px-6 py-3 rounded-md shadow-md">
        Start Here
        <div className="absolute w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-[#FFB848]] -bottom-2 left-1/2 transform -translate-x-1/2"></div>
      </div>
    </div>

    {/* Options */}
    <h5 className="text-[1.13rem] md:text-[1.5rem] font-bold mb-3 text-center">
      What are you interested in?
    </h5>
    <div className="flex gap-2 mb-6 w-fit mx-auto">
      {/* Option 1 */}
      <Link href='/questions'>
      <div className="bg-[#abb8c3] p-2 rounded-md">
        <Image
          className="mx-auto"
          src={solarPowerSystemLogo}
          alt="solar power system"
          width={40}
          height={40}
        />
        <p className="text-center text-sm font-semibold w-[120px] max-w-[150px] mt-2">
          Solar Power <br /> System
        </p>
      </div>
      </Link>
      {/* Option 2 */}
      <Link href='/questions'>
      <div className="bg-[#abb8c3] p-2 rounded-md">
        <Image
          className="mx-auto"
          src={solarandbattery}
          alt="solar power system"
          width={40}
          height={40}
        />
        <p className="text-center text-sm font-semibold w-[120px] max-w-[150px] mt-2">
          Solar and <br />
          Battery Storage
        </p>
      </div>
      </Link >

    </div>

    <span className="text-[#fffc] text-center font-normal leading-[1.2] tracking-[-0.01em] block text-xs md:text-sm mt-2">
      100% obligation free
    </span>
  </div>
</div>

      </div>
    </div>
  );
}