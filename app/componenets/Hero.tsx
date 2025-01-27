
import Image from "next/image";
import Link from "next/link";
import heroBg from "@/public/images/heroBg.svg"
import solarPower from "@/public/images/icons/Solar Power System.svg"
import solarandbattery from "@/public/images/icons/Solar and Battery Storage.svg"

export default function Hero() {
  return (
 
      <div className="md:grid md:grid-cols-2 mt-10  max-w-[1200px] mx-auto justify-center justify-items-center place-items-center ">
       
        <div className="md:my-12   max-w-[1200px] mx-auto ">
          <div className="  ">
            <h1 className="text-[1.38rem]  leading-8 text-darkshadegray text-center md:text-left font-bold md:text-[2.6rem] md:leading-[1.3] md:tracking-[-0.02em]">
              Find the Best Solar Energy <br className="hidden md:block" />
              Deals for Your Home
            </h1>
            <p className="mt-3 md:w-[80%] my-4 text-center md:text-left  text-textColor ">
            We search far and wide to find you the best deals, leaving you free to choose the one that suits you perfectly             
              that’s right for you.
            </p>
          </div>
          {/* "Start Here" Button */}
          <div className="bg-darkshadegray  relative w-[90%] rounded-lg mx-auto md:mx-1 md:w-[440px] p-6  mt-10 mb-6 md:p-8 md:rounded-md">
          <Link href="/questions">
          <div className="absolute -top-6 left-0 right-0 mx-auto   flex items-center justify-center animate-bounce-custom">
              <div className="relative bg-gradient-to-b from-yellow-400 to-orange-400  text-white text-sm md:text-lg font-bold px-6 py-3 rounded-md shadow-md">
                Start Here
                <div className="absolute w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-[#FBB724] -bottom-2 left-1/2 transform -translate-x-1/2"></div>
              </div>
            </div>
          </Link>
        

            {/* Options */}
            <h5 className="text-[1.13rem] md:text-[1.5rem] font-bold mb-3 text-center">
              What are you interested in?
            </h5>
            <div className="flex gap-2 justify-center   mx-auto">
              {/* Option 1 */}
              <Link href="/questions">
                <div className="bg-paleGray  text-darkshadegray p-2 rounded-md">
                  {/* <Image
                    className="mx-auto"
                    src={solarPowerSystemLogo}
                    alt="solar power system"
                    width={40}
                    height={40}
                  /> */}
              <Image className="mx-auto" src={solarPower} alt="solar power icon" />
                  <h6 className="text-center text-xs md:text-sm   font-medium w-[120px] max-w-[150px] mt-2">
                    Solar Power <br /> System
                  </h6>
                </div>
              </Link>
              {/* Option 2 */}
              <Link href="/questions">
                <div className="bg-paleGray text-darkshadegray p-2 rounded-md">
                <Image className="mx-auto" src={solarandbattery} alt="solar power icon" />
                <h6 className="text-center text-xs md:text-sm   font-medium w-[120px] max-w-[150px] mt-2">
                    Solar and <br />
                    Battery Storage
                  </h6>
                </div>
              </Link>
            </div>

            <span className="text-white text-center font-normal leading-[1.2] tracking-[-0.01em] block text-xs md:text-sm mt-6">
              100% obligation free
            </span>
          </div>
        </div>
        <div>
          <Image src={heroBg} alt='hero alt' width={400} height={400} />
        </div>
      </div>
  );
}
