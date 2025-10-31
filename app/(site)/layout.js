import { Montserrat, Open_Sans } from "next/font/google";
import "../globals.css";
import React from "react";
import AOSWrapper from "./components/AOSWrapper";
import FooterDynamic from "./components/Footer";
import Navbar from "./components/Navbar";

const opensans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-opensans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Zahira Portfolio",
  description: "Personal website by Zahira Anindya Putri",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} ${opensans.className} antialiased`}
      >
        <div className="bg-[#222831] text-white min-h-screen relative">
          <Navbar />

          <AOSWrapper>{children}</AOSWrapper>

          <FooterDynamic />
        </div>
      </body>
    </html>
  );
}
