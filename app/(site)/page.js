"use client";
import React, { useEffect } from 'react';

export default function App() {
  const profileImagePath = "/WS_ZahiraA.png";

  useEffect(() => {
    const loadAOS = () => {
        if (typeof window.AOS === 'undefined') {
            const link = document.createElement('link');
            link.href = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css';
            link.rel = 'stylesheet';
            document.head.appendChild(link);

            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js';
            script.onload = () => {
                window.AOS.init({
                    duration: 1000,
                    once: true, 
                });
            };
            document.body.appendChild(script);
        } else {
            window.AOS.refresh();
        }
    };

    loadAOS();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window.AOS !== 'undefined') {
        window.AOS.refresh();
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className="bg-[#222831] text-white min-h-screen">
      
      <section id="home" className="container mx-auto px-6 lg:px-24 pt-10 pb-16 lg:pt-24 lg:pb-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-4 lg:space-y-5 order-2 lg:order-1" data-aos="fade-right">
              <p className="text-xl lg:text-2xl mb-2 font-bold">Hi there! I'm</p>
              <h1 className="text-5xl lg:text-7xl md:text-6xl mb-2 font-bold leading-tight lg:leading-none">
                  Zahira<br />Anindya
              </h1>
              <p className="text-base lg:text-xl text-gray-300 max-w-lg pt-2">
                A learner who is having fun exploring about tech, design, and creative ideas — welcome to my portfolio!
              </p>

              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-6">
              <a 
                  className="bg-[#4D45E4] text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-[#3B34AA] transition duration-300 shadow-xl w-full sm:w-auto text-center"
                  href="/projects"
              >
                  See Projects
              </a>
          </div>
          </div>

          <div className="flex justify-center lg:justify-end order-1 lg:order-2 p-4" data-aos="fade-left">
            <div className="group relative p-3 border-14 border-white w-full max-w-xs md:max-w-sm aspect-square overflow-hidden shadow-2xl bg-gray-700">
              <img
                  src={profileImagePath}
                  alt="Profile Picture of Zahira Anindya"
                  className="w-full h-full absolute top-0 left-0 object-cover transition duration-500 ease-in-out group-hover:-translate-y-[7%] group-hover:scale-[1.2]"
              />
              
            </div>
          </div>
      </section>
    </div>
  );
}