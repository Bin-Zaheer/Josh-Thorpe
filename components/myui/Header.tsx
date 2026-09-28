"use client";

import Image from "next/image";
import Link from "next/link";
import React, {
  useEffect,
  useState,
} from "react";
import { ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();
  console.log(path);

  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true },
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
    };
  }, []);

  return (
    <header className="sticky top-0 left-0 z-50 w-full bg-white h-17.5 flex items-center font-sans border-b border-gray-100 backdrop-blur-2xl shadow-2xl overflow-visible">
      <div className="w-full h-full flex items-center justify-between relative pl-8 lg:pl-16">
        <div className="flex items-center gap-12 lg:gap-16 h-full lg:w-35 lg:shrink-0">
          <a
            href="#home"
            className="flex items-center gap-4 shrink-0 relative z-60"
            aria-label="Josh Thorpe Fitness & Injury Clinic home"
          >
            <div
              className={`
            flex items-center justify-center
            bg-white
            overflow-hidden
            transition-all duration-500 ease-in-out
            ${isScrolled ? "h-14 w-14" : "mt-10 h-35 w-35 px-3 rounded-xl"}
           `}
            >
              <Image
                src="/images/logo.webp"
                width={100}
                height={100}
                alt="Josh Thorpe Fitness & Injury Clinic"
                className="
              h-full
              w-full
              object-contain
              transition-all duration-500 ease-in-out
            "
              />
            </div>
          </a>
        </div>
        <div className="">
          <nav
            className="hidden lg:flex items-center gap-8 h-full shrink-0"
            aria-label="Primary navigation"
          >
            {[
              ["Home", "/"],
              ["Services", "/services"],
              ["About Us", "/about"],
              ["Contact Us", "/contactus"],
            ].map(([label, href], index) => {
              return (
                <Link
                  key={label}
                  href={href}
                  className={`group relative flex items-center h-full text-[16px] font-bold transition-colors duration-200 `}
                >
                  <span
                    className={`${
                      path == href
                        ? "text-[#ff5500]"
                        : "text-[#4a4a4a] hover:text-[#ff5500]"
                    }`}
                  >
                    {label}
                  </span>

                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#ff5500] transition-all duration-500 ${
                      path == href
                        ? "w-full opacity-100 text-[#ff5500]"
                        : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="hidden lg:block relative h-full w-100 shrink-0 overflow-hidden">
          <div
            className={`
          absolute inset-y-0 left-0 w-full
          bg-linear-to-r from-[#ff6b00] to-[#ff4500]
          transition-opacity duration-700
          ease-in-out
          ${isScrolled ? "opacity-0" : "opacity-100"}
        `}
            style={{
              clipPath:
                "polygon(22% 0, 100% 0, 88% 100%, 0% 100%)",
            }}
          ></div>

          <div
            className={`
          absolute inset-y-0 left-0 w-full bg-white
          transition-opacity duration-700
          ease-in-out
          ${isScrolled ? "opacity-100" : "opacity-0"}
        `}
            style={{
              clipPath:
                "polygon(22% 0, 100% 0, 88% 100%, 0% 100%)",
            }}
          ></div>

          <div
            className={`
          absolute inset-y-0 right-0 w-[15%] -z-10
          bg-[#401a00]
          transition-opacity duration-700
          ease-in-out
          ${isScrolled ? "opacity-0" : "opacity-100"}
        `}
          ></div>

          <div
            className={`
          absolute inset-y-0 right-0 w-[15%] -z-10
          bg-white
          transition-opacity duration-700
          ease-in-out
          ${isScrolled ? "opacity-100" : "opacity-0"}
        `}
          ></div>

          <div className="absolute inset-0 flex items-center justify-center pr-12 select-none">
            <div className="relative p-0.75 pr-0 overflow-hidden rounded-l-full rounded-r-none flex items-center">
              <div className="absolute inset-0 border-10 border-white/80 rounded-full pointer-events-none z-0" />

              <a
                href="#contact"
                className="relative z-10 inline-flex items-center gap-3 bg-[#ff5500] hover:bg-[#e24c00] text-white px-8 py-3 text-[14px] font-bold rounded-full transition-all duration-150 active:scale-95 shadow-md shadow-orange-700/20"
              >
                <span className="tracking-wide text-white">
                  Book Now
                </span>

                <span className="text-[16px] font-light text-white transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="lg:hidden pr-8">
          <button
            className="flex flex-col gap-1.5 justify-center items-center w-8 h-8"
            onClick={() =>
              setMenuOpen((value) => !value)
            }
            aria-expanded={menuOpen}
          >
            <span
              className={`w-6 h-0.5 bg-gray-800 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`w-6 h-0.5 bg-gray-800 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`w-6 h-0.5 bg-gray-800 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div
          className="
            
          lg:hidden
          fixed inset-x-0 top-22.5
          z-50
          overflow-hidden
          bg-white
          shadow-[0_18px_45px_rgba(0,0,0,0.12)]
          p-6
          flex flex-col gap-4
          animate-[mobileMenuIn_400ms_cubic-bezier(0.22,1,0.36,1)]
          rounded-2xl
        "
        >
          {[
            ["Home", "/"],
            ["Services", "/services"],
            ["About Us", "/about"],
            ["Contact Us", "/contactus"],
          ].map(([label, href], index) => (
            <Link
              key={index}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="
    group
    relative
    flex
    w-full
    items-center
    justify-between
    py-2
    text-base
    font-bold
    text-gray-700
    transition-all
    duration-300
    hover:pl-2
    hover:text-[#ff5500]
    animate-[mobileMenuItem_500ms_cubic-bezier(0.22,1,0.36,1)_both]
  "
              style={{
                animationDelay: `${index * 55}ms`,
              }}
            >
              {/* Menu Label */}
              <span className="relative">
                {label}

                <span
                  className="
        absolute
        -bottom-1
        left-0
        h-0.5
        w-0
        bg-[#ff5500]
        transition-all
        duration-300
        group-hover:w-full
      "
                />
              </span>

              {/* Arrow */}
              <span
                className="
      flex
      h-9
      w-9
      shrink-0
      items-center
      justify-center
      rounded-full
      border
      border-gray-200
      text-gray-500
      transition-all
      duration-300
      group-hover:border-[#ff5500]
      group-hover:bg-[#ff5500]
      group-hover:text-white
    "
              >
                <ArrowUpRight
                  size={16}
                  strokeWidth={2}
                  className="
        transition-transform
        duration-300
        group-hover:translate-x-0.5
        group-hover:-translate-y-0.5
        
      "
                />
              </span>
            </Link>
          ))}
          <div className=" border-10 border-white/80  pointer-events-none z-0" />

          <a
            href="#contact"
            className="   gap-3 bg-[#ff5500] hover:bg-[#e24c00] text-white px-8 py-3 text-[14px] flex justify-between font-bold rounded-2xl transition-all duration-150 active:scale-95 shadow-md shadow-orange-700/20"
          >
            <span className="tracking-wide text-white">
              Book Now
            </span>

            <span className="text-[16px] font-light text-white transform group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
