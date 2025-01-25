
import Image from "next/image";
import Link from "next/link";
import heroBg from "@/public/images/heroBg.svg"
export default function Hero() {
  return (
 
      <div className="md:grid md:grid-cols-2 items-center z-10 md:p-4">
       
        <div className="md:my-14 z-20 mb-20  content md:p-4 max-w-[1200px] mx-auto ">
          <div className="p-3  ">
            <h1 className="text-[1.38rem]  leading-9 text-darkshadegray text-center md:text-left font-bold md:text-[2.6rem] md:leading-[1] md:tracking-[-0.02em]">
              Find the Best Solar Energy <br className="hidden md:block" />
              Deals for Your Home
            </h1>
            <p className="mt-3 md:w-[80%] my-4 text-center md:text-left  text-textColor  leading-6 text-sm md:text-[1.1rem]">
            We search far and wide to find you the best deals, leaving you free to choose the one that suits you perfectly             
              that’s right for you.
            </p>
          </div>
          {/* "Start Here" Button */}
          <div className="bg-darkshadegray  relative w-[90%] rounded-lg mx-auto md:mx-1 md:w-[400px] p-6  mt-16 md:p-8 md:rounded-md">
          <Link href="/questions">
          <div className="absolute -top-6 left-[100px] md:left-[134px] transform -translate-x-1/2 flex items-center justify-center animate-bounce-custom">
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
            <div className="flex gap-2   mx-auto">
              {/* Option 1 */}
              <Link href="/questions">
                <div className="bg-paleGray text-darkshadegray p-2 rounded-md">
                  {/* <Image
                    className="mx-auto"
                    src={solarPowerSystemLogo}
                    alt="solar power system"
                    width={40}
                    height={40}
                  /> */}
                  <svg className="mx-auto" width="40" height="41" viewBox="0 0 40 41" fill="#FAB42B" xmlns="http://www.w3.org/2000/svg" focusable="false"><g clip-path="#FAB42B"><path d="M10.59 23.032h18.82c.377 0 .73.182.952.488l9.41 13.045c.566.784.011 1.884-.95 1.884H1.178c-.961 0-1.516-1.1-.95-1.884l9.41-13.045c.221-.306.575-.488.951-.488zm3.892 13.045h11.036l-1.444-5.337h-8.148l-1.444 5.337zm14.33-10.673h-3.743l.802 2.965h5.08l-2.14-2.965zm-6.181 0h-5.262l-.802 2.965h6.866l-.802-2.965zm-7.7 0h-3.743L9.05 28.369h5.08l.802-2.965zm13.026 10.673h8.554l-3.85-5.337h-6.148l1.444 5.337zM7.338 30.74l-3.85 5.337h8.555l1.444-5.337H7.338zm23.25-11.266c0 .655-.527 1.186-1.177 1.186s-1.177-.53-1.177-1.186c0-4.584-3.686-8.3-8.234-8.3s-8.234 3.716-8.234 8.3c0 .655-.527 1.186-1.177 1.186s-1.176-.53-1.176-1.186c0-5.894 4.74-10.673 10.587-10.673 5.847 0 10.587 4.779 10.587 10.673zm-9.412-14.23c0 .655-.526 1.185-1.176 1.185-.65 0-1.176-.53-1.176-1.185V1.686C18.824 1.03 19.35.5 20 .5c.65 0 1.176.53 1.176 1.186v3.558zm9.637 5.006a1.17 1.17 0 01-1.663 0 1.193 1.193 0 010-1.677l2.495-2.516a1.17 1.17 0 011.664 0c.46.464.46 1.214 0 1.678l-2.496 2.515zm3.303 10.41c-.65 0-1.176-.53-1.176-1.186 0-.655.527-1.186 1.176-1.186h3.53c.649 0 1.175.531 1.175 1.186 0 .655-.526 1.186-1.176 1.186h-3.529zM5.884 18.288c.65 0 1.176.531 1.176 1.186 0 .655-.526 1.186-1.176 1.186h-3.53c-.649 0-1.176-.53-1.176-1.186 0-.655.527-1.186 1.177-1.186h3.529zm4.966-9.715c.46.463.46 1.214 0 1.677a1.17 1.17 0 01-1.663 0L6.69 7.735a1.193 1.193 0 010-1.678 1.17 1.17 0 011.664 0l2.495 2.516z" fill="url(#uwph6bq8o30uoc08480p7)"></path></g><defs><linearGradient id="uwph6bq8o30uoc08480p7" x1="0" y1=".5" x2="37.896" y2="40.445" gradientUnits="userSpaceOnUse"><stop stop-color="#FAB42B"></stop><stop offset="1" stop-color="#FAB42B"></stop></linearGradient><clipPath id="a415czqkd0c5fuxngssti"><path fill="#fff" transform="translate(0 .5)" d="M0 0h40v40H0z"></path></clipPath></defs></svg>
                  <p className="text-center text-sm font-semibold w-[120px] max-w-[150px] mt-2">
                    Solar Power <br /> System
                  </p>
                </div>
              </Link>
              {/* Option 2 */}
              <Link href="/questions">
                <div className="bg-paleGray text-darkshadegray p-2 rounded-md">
                 <svg className="mx-auto" width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false"><g clip-path="url(#bssoblnmydt0fmgxq72jge4)"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.382 6.505c.663 0 1.2-.538 1.2-1.2V1.7a1.201 1.201 0 10-2.401 0v3.603c0 .663.537 1.201 1.2 1.201zM7.433 4.956l1.802 3.12c.181.315.463.518.787.585.309.064.613-.006.854-.145.24-.139.452-.367.552-.667a1.18 1.18 0 00-.113-.973l-1.801-3.12a1.18 1.18 0 00-.787-.585 1.222 1.222 0 00-.854.145c-.24.139-.453.367-.552.667a1.18 1.18 0 00.112.973zm10.949 5.152c-5.896 0-10.747 4.472-11.347 10.209H2.77a2.403 2.403 0 00-2.403 2.405v12.004A2.404 2.404 0 002.77 37.13h30.023a2.403 2.403 0 002.403-2.405v-.598h2.403A2.4 2.4 0 0040 31.723v-5.998a2.403 2.403 0 00-2.4-2.406h-2.404v-.597a2.404 2.404 0 00-2.403-2.405h-3.064c-.6-5.737-5.451-10.209-11.347-10.209zM3.728 14.451l-3.12-1.802a1.18 1.18 0 01-.584-.786c-.064-.31.005-.613.144-.854.14-.241.368-.453.668-.552a1.18 1.18 0 01.973.112l3.12 1.802c.315.181.518.463.584.786.064.31-.005.614-.144.854-.14.241-.368.453-.667.553a1.18 1.18 0 01-.974-.113zM27.25 3.755l-1.802 3.12a1.18 1.18 0 00-.112.974c.1.3.311.528.552.667.24.14.545.209.854.145a1.18 1.18 0 00.787-.584l1.801-3.12a1.18 1.18 0 00.113-.974c-.1-.3-.312-.528-.552-.667a1.222 1.222 0 00-.854-.145 1.18 1.18 0 00-.787.584zm3.984 8.616l3.12-1.802a1.18 1.18 0 01.973-.112c.3.1.529.311.668.552.139.24.208.544.144.854a1.18 1.18 0 01-.584.787l-3.12 1.801a1.18 1.18 0 01-.974.112c-.3-.099-.528-.31-.667-.552a1.222 1.222 0 01-.144-.854 1.18 1.18 0 01.584-.786zm-3.924 7.946a9.01 9.01 0 00-17.856 0H27.31zm10.288 5.406l-2.402-.002v6.005h2.402v-6.003zM2.77 22.719h30.024v12.007s-20.431-.31-30.024.002v-12.01z" fill="url(#upzsikygf0537gsaodot6)"></path></g><defs><linearGradient id="upzsikygf0537gsaodot6" x1="0" y1=".5" x2="36.489" y2="40.346" gradientUnits="userSpaceOnUse"><stop stop-color="#FAB42B"></stop><stop offset="1" stop-color="#FAB42B"></stop></linearGradient><clipPath id="bssoblnmydt0fmgxq72jge4"><path fill="#fff" transform="translate(0 .5)" d="M0 0h40v40H0z"></path></clipPath></defs></svg>
                  <p className="text-center text-sm font-semibold w-[120px] max-w-[150px] mt-2">
                    Solar and <br />
                    Battery Storage
                  </p>
                </div>
              </Link>
            </div>

            <span className="text-white text-center font-normal leading-[1.2] tracking-[-0.01em] block text-xs md:text-sm mt-2">
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
