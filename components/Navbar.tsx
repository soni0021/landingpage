"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end h-16 sm:h-20">
          <a
            href="#registration"
            className="bg-[#d82209] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-[#b91c1c] transition-colors shadow-md"
          >
            Apply Now
          </a>
        </div>
      </div>
    </nav>
  );
}

