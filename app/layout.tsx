import type { Metadata } from "next";
import {Epilogue } from "next/font/google";
import "./globals.css";


const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SolarLocal",
  description: "Empowering communities with clean energy solutions, SolarLocal simplifies solar panel installation, monitoring, and optimization to help you harness the power of the sun.",
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
        {children}
      </body>
    </html>
  );
}
