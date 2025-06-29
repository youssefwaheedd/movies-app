import Link from "next/link";
import { Film, Home, Star } from "lucide-react";

export default function Navbar() {
  return (
    <nav
      className="w-full bg-[#0b0c0f] shadow-md py-4 px-6 flex items-center justify-between sticky top-0 z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Logo / App Name */}
      <Link
        href="/"
        className="text-2xl font-bold text-[#1ce783] tracking-tight flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1ce783] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0c0f] rounded"
        aria-label="Go to home page"
      >
        <Film aria-hidden="true" /> {/*icons hidden for better accessability */}
        <span className="hidden sm:flex">Movie App</span>
      </Link>
      {/* Navigation Links */}
      <div className="flex items-center gap-6" role="menubar">
        <Link
          href="/"
          className="text-gray-300 hover:text-[#1ce783] font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1ce783] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0c0f] rounded px-2 py-1"
          role="menuitem"
          aria-label="Go to home page"
        >
          <span className="flex sm:hidden">
            <Home aria-hidden="true" />
          </span>
          <span className="hidden sm:flex">Home</span>
        </Link>
        <Link
          href="/favorites"
          className="text-gray-300 hover:text-[#1ce783] font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1ce783] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0c0f] rounded px-2 py-1"
          role="menuitem"
          aria-label="View favorite movies"
        >
          <span className="flex sm:hidden">
            <Star aria-hidden="true" />
          </span>
          <span className="hidden sm:flex">Favorites</span>
        </Link>
      </div>
    </nav>
  );
}
