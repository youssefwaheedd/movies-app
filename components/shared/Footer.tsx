"use client";

import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0b0c0f] text-gray-400 border-t border-gray-800 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} MovieApp. Built with ❤️ by Youssef
          Waheed.
        </p>

        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/youssefwaheedd"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1ce783] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0c0f] rounded p-1"
            aria-label="Visit GitHub profile"
          >
            <Github size={20} aria-hidden="true" />
          </Link>
          <Link
            href="https://linkedin.com/in/youssefwaheed"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1ce783] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0c0f] rounded p-1"
            aria-label="Visit LinkedIn profile"
          >
            <Linkedin size={20} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
