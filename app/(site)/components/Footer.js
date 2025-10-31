"use client";

import { Linkedin, Instagram } from "lucide-react";

export default function FooterDynamic() {
  return (
    <footer className="bg-[#1C1F24] text-gray-300 py-8 mt-16">
      <div className="container mx-auto px-6 lg:px-24 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Zahira Anindya. All rights reserved.
        </p>

        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/zahira-anindya-putri/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0a66c2] transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/zahiraanindya_?igsh=ZnNoMHV2dThyZjdk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
