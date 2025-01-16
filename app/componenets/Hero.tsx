import Image from "next/image";
import solarPowerSystemLogo from "@/public/images/icons/solarPowerSystem.svg";
import solarandbattery from "@/public/images/icons/solarandbattery.svg";
import sun from "@/public/images/sun.png";
import logo from "@/public/images/SolarLocal Logo Files/SolarLocal Logo_coloured.svg";





export default function Hero() {
  return (
    <div className="  hero-wrapper md:p-4">
      {/* Header */}
      <div className="flex justify-between p-3 mb-10 items-center">
        <span className="inline-flex w-fit items-center ">
          <Image className="h-8 w-8 md:h-auto md:w-auto" src={sun} alt="solar logo" width={45} height={45} />
          <Image className="" src={logo} alt="solar logo" width={200} height={100} />
        </span>

        <div>
          <button className="gradientButton p-2 px-3 text-xs font-normal text-nowrap capitalize text-white md:text-[1.1rem] md:font-semibold md:py-4 md:px-6 rounded-sm">
            Compare Solar Now
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="md:m-14 text-white">
        <div className="p-3">
          <h1 className="text-[1.38rem] tracking-[-0.04em] leading-[1.1] text-center md:text-left font-bold md:text-[2.6rem] md:leading-[1] md:tracking-[-0.02em]">
            Find the Best Solar Energy{" "}
            <br className="hidden md:block" />
            Deals for Your Home
          </h1>
          <h4 className="mt-3 text-center md:text-left font-semibold tracking-[-0.04em] text-base">
            We find you the best deals, you choose the one{" "}
            <br className="hidden md:block" />
            that’s right for you.
          </h4>
        </div>

        {/* "Start Here" Button */}
        <div className="gradientButton relative md:w-[400px]  mt-16 md:p-10 p-4 md:rounded-md">
  <div className="absolute -top-10 left-[100px] md:left-[120px] transform -translate-x-1/2 flex items-center justify-center animate-bounce-custom">
    <div className="relative bg-green-500 text-white text-base md:text-lg font-semibold px-6 py-3 rounded-md shadow-md">
      Start Here
      <div className="absolute w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-green-500 -bottom-2 left-1/2 transform -translate-x-1/2"></div>
    </div>
  </div>

  {/* Options */}
  <h5 className="text-[1.3rem] font-semibold mb-2 text-center">
    What are you interested in?
  </h5>
  <div className="flex gap-2 mb-6 w-fit mx-auto">
    {/* Option 1 */}
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
    {/* Option 2 */}
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
  </div>
  <span className="text-[#FFFFFFCC] text-center block text-xs mt-2">
    100% obligation free
  </span>
</div>

      </div>
    </div>
  );
}
