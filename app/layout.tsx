import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import "./globals.css"; // Your own global styles (if any)
import AosInit from "./componenets/Aos";
import RecaptchaProvider from "./componenets/RecaptchaProvider";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SolarLocal",
  description:
    "Empowering Communities with Clean Energy Solutions | Optimize Solar Power for a Sustainable Future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${epilogue.className} ${epilogue.variable} antialiased`}
      >
        <AosInit />
        <RecaptchaProvider>

        {children}
        </RecaptchaProvider>
      </body>
    </html>
  );
}
