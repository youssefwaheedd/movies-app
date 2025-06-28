import Link from "next/link";
import { Film, Home, Star } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full  bg-[#0b0c0f] shadow-md py-4 px-6 flex items-center justify-between sticky top-0 z-50">
      {/* Logo / App Name */}
      <Link
        href="/"
        className="text-2xl font-bold text-[#1ce783] tracking-tight flex items-center gap-2"
      >
        <Film /> <span className="hidden sm:flex">Movie App</span>
      </Link>
      {/* Navigation Links */}
      <div className="flex items-center gap-6">
        <Link
          href="/"
          className="text-gray-700 hover:text-[#1ce783] font-medium transition-colors"
        >
          <span className="flex sm:hidden">
            <Home />
          </span>
          <span className="hidden sm:flex">Home</span>
        </Link>
        <Link
          href="/favorites"
          className="text-gray-700 hover:text-[#1ce783] font-medium transition-colors"
        >
          <span className="flex sm:hidden">
            <Star />
          </span>
          <span className="hidden sm:flex">Favorites</span>
        </Link>
      </div>
    </nav>
  );
}
