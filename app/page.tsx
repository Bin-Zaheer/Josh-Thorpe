"use client";

import Image from "next/image";
import {
  FormEvent,
  useEffect,
  useMemo,
  useState,
} from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/pagination";

const ORANGE = "#FF5E1A";

const images = {
  hero: "https://images.pexels.com/photos/27730527/pexels-photo-27730527.jpeg?cs=srgb&dl=pexels-jonathanborba-27730527.jpg&fm=jpg",
  about:
    "https://images.pexels.com/photos/27730454/pexels-photo-27730454.jpeg?cs=srgb&dl=pexels-jonathanborba-27730454.jpg&fm=jpg",
  training:
    "https://images.pexels.com/photos/17883763/pexels-photo-17883763.jpeg?cs=srgb&dl=pexels-marcuschanmedia-17883763.jpg&fm=jpg",
  tape: "https://images.pexels.com/photos/7339492/pexels-photo-7339492.jpeg?cs=srgb&dl=pexels-cottonbro-7339492.jpg&fm=jpg",
  running:
    "https://images.pexels.com/photos/5961800/pexels-photo-5961800.jpeg?cs=srgb&dl=pexels-runffwpu-5961800.jpg&fm=jpg",
  coach:
    "https://images.pexels.com/photos/4854267/pexels-photo-4854267.jpeg?cs=srgb&dl=pexels-ketut-subiyanto-4854267.jpg&fm=jpg",
  portrait:
    "https://images.pexels.com/photos/5878697/pexels-photo-5878697.jpeg?cs=srgb&dl=pexels-shkrabaanthony-5878697.jpg&fm=jpg",
};

const services = [
  {
    title: "Sports Therapy",
    kicker: "RECOVER",
    image: images.about,
    body: "Hands-on therapy, movement assessment and recovery support built around your body.",
  },
  {
    title: "Personal Training",
    kicker: "BUILD",
    image: images.training,
    body: "Focused one-to-one strength and conditioning sessions built around measurable goals.",
  },
  {
    title: "Injury Rehabilitation",
    kicker: "RESTORE",
    image: images.tape,
    body: "Progressive rehabilitation for confidence, function, strength and return to activity.",
  },
  {
    title: "Performance Coaching",
    kicker: "PERFORM",
    image: images.running,
    body: "Speed, power, capacity and movement coaching for athletes and ambitious movers.",
  },
  {
    title: "Mobility & Recovery",
    kicker: "MOVE",
    image: images.coach,
    body: "Move with more freedom, recover with more intent and keep your body ready.",
  },
];

const process = [
  [
    "01",
    "Assessment",
    "We start with a detailed movement and goal assessment so the plan is built around you.",
  ],
  [
    "02",
    "Plan",
    "A clear programme joins therapy, strength, mobility and coaching around the outcome you want.",
  ],
  [
    "03",
    "Execute",
    "Every session has purpose, feedback and progression so you know what to work on next.",
  ],
  [
    "04",
    "Results",
    "The goal is simple: move better, feel stronger and stay confident in your body.",
  ],
];

const testimonials = [
  {
    quote:
      "Josh doesn't just treat the painful area — he actually works out why it's happening. I feel stronger and more confident now.",
    name: "Sarah M.",
    meta: "Client · Rehabilitation",
  },
  {
    quote:
      "Everything feels considered. The sessions are challenging, but the plan always makes sense and I can see my progress.",
    name: "James T.",
    meta: "Client · Performance",
  },
  {
    quote:
      "The biggest change is how I move day to day. I have more confidence and I know exactly what to do between sessions.",
    name: "Emily R.",
    meta: "Client · Personal Training",
  },
];

interface ArrowIconProps {
  className?: string;
}

export function ArrowIcon({
  className = "",
}: ArrowIconProps) {
  return (
    <span
      aria-hidden
      className={`arrow-icon inline-block ${className}`}
    >
      ↗
    </span>
  );
}

function ChevronIcon({
  left = false,
}: {
  left?: boolean;
}) {
  return (
    <span aria-hidden className="chevron">
      {left ? "←" : "→"}
    </span>
  );
}

function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div
      className={`section-label ${light ? "section-label--light" : ""}`}
    >
      <span className="section-label__line" />
      <span>{children}</span>
    </div>
  );
}

function OrangeButton({
  href,
  children,
  dark = false,
}: {
  href: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <a
      className={`orange-button ${dark ? "orange-button--dark" : ""}`}
      href={href}
    >
      {children}
      <ArrowIcon />
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [testimonial, setTestimonial] =
    useState(0);
  const [formSent, setFormSent] = useState(false);

  const [isMobile, setIsMobile] = useState(false); // Default server safe rakhne ke liye false

  useEffect(() => {
    // Yeh code sirf browser par chalega, isliye server-side build crash nahi hoga!
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Pehli baar run karne ke liye
    handleResize();

    // Event listener lagane ke liye taaki screen resize hone par update ho
    window.addEventListener(
      "resize",
      handleResize,
    );
    return () =>
      window.removeEventListener(
        "resize",
        handleResize,
      );
  }, []);

  useEffect(() => {
    const nodes =
      document.querySelectorAll<HTMLElement>(
        ".reveal",
      );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add(
            "is-visible",
          );
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -80px 0px",
      },
    );

    nodes.forEach((node) =>
      observer.observe(node),
    );

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = window.setInterval(
      () =>
        setTestimonial(
          (value) =>
            (value + 1) % testimonials.length,
        ),
      5200,
    );
    return () => window.clearInterval(timer);
  }, []);

  const current = useMemo(
    () => testimonials[testimonial],
    [testimonial],
  );

  const submit = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    setFormSent(true);
  };

  const [serviceIndex, setServiceIndex] =
    useState(0);

  useEffect(() => {
    if (services.length <= 2) return;

    const interval = setInterval(() => {
      setServiceIndex((prev) =>
        prev >= services.length - 2
          ? 0
          : prev + 1,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

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
    <main className="site-shell">
      <header className="sticky top-0 left-0 z-50 w-full bg-white h-[70px] flex items-center font-sans border-b border-gray-100 backdrop-blur-2xl shadow-2xl overflow-visible">
        {/* Main Container */}
        <div className="w-full h-full flex items-center justify-between relative pl-8 lg:pl-16">
          {/* Left Section: Logo + Text + Nav Links ek hi flow me */}
          <div className="flex items-center gap-12 lg:gap-16 h-full">
            <a
              href="#home"
              className="flex items-center gap-4 shrink-0 relative z-[60]"
              aria-label="Josh Thorpe Fitness & Injury Clinic home"
            >
              <div
                className={`
        flex items-center justify-center
        bg-white
        overflow-hidden
        transition-all duration-500 ease-in-out
        ${isScrolled ? "h-14 w-14" : "mt-10 h-[140px] w-[140px] px-3 rounded-xl"}
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
              className="hidden lg:flex items-center gap-8 h-full"
              aria-label="Primary navigation"
            >
              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Services", "#services"],
                ["Results", "#results"],
                ["Contact", "#contact"],
              ].map(([label, href], index) => {
                const isActive = index === 0; // Home active hai jaisa pic me hai
                return (
                  <a
                    key={label}
                    href={href}
                    className={`group relative flex items-center h-full text-[16px] font-bold transition-colors duration-200 `}
                  >
                    <span
                      className={`${
                        isActive
                          ? "text-[#ff5500]"
                          : "text-[#4a4a4a] hover:text-[#ff5500]"
                      }`}
                    >
                      {label}
                    </span>
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-[#ff5500] transition-all duration-500 ${
                        isActive
                          ? "w-full opacity-100 text-[#ff5500]"
                          : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                      }`}
                    />
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Right Section: Orange Slant and Button */}
          <div className="hidden lg:block relative h-full w-[400px] shrink-0 overflow-hidden">
            {/* ORIGINAL ORANGE DESIGN — SAME */}
            <div
              className={`
      absolute inset-y-0 left-0 w-full
      bg-gradient-to-r from-[#ff6b00] to-[#ff4500]
      transition-opacity duration-700
      ease-in-out
      ${isScrolled ? "opacity-0" : "opacity-100"}
    `}
              style={{
                clipPath:
                  "polygon(22% 0, 100% 0, 88% 100%, 0% 100%)",
              }}
            ></div>

            {/* WHITE VERSION — SAME EXACT SHAPE, ONLY FOR FADE */}
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

            {/* ORIGINAL DARK BLOCK — SAME */}
            <div
              className={`
      absolute inset-y-0 right-0 w-[15%] -z-10
      bg-[#401a00]
      transition-opacity duration-700
      ease-in-out
      ${isScrolled ? "opacity-0" : "opacity-100"}
    `}
            ></div>

            {/* WHITE VERSION OF DARK BLOCK */}
            <div
              className={`
      absolute inset-y-0 right-0 w-[15%] -z-10
      bg-white
      transition-opacity duration-700
      ease-in-out
      ${isScrolled ? "opacity-100" : "opacity-0"}
    `}
            ></div>

            {/* BOOK NOW — 100% SAME */}
            <div className="absolute inset-0 flex items-center justify-center pr-12 select-none">
              <div className="relative p-[3px] pr-0 overflow-hidden rounded-l-full rounded-r-none flex items-center">
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

          {/* Mobile Hamburger (Sirf small screens ke liye) */}
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

        {/* Mobile Drawer */}
        {menuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[90px] bg-white shadow-xl p-6 flex flex-col gap-4 z-50">
            {[
              "Home",
              "About",
              "Services",
              "Results",
              "Contact",
            ].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 font-bold text-base py-2"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </header>

      <section
        id="home"
        className="relative isolate min-h-[620px] overflow-hidden bg-[#111] text-white lg:min-h-[680px]"
      >
        {/* ================= BACKGROUND IMAGE ================= */}
        <div className="absolute inset-0 -z-30 overflow-hidden">
          <Image
            src="/banner.webp"
            fill
            alt="Josh Thorpe Fitness and Injury Clinic"
            className="
      h-full w-full
      object-cover object-center
      md:translate-x-0
      translate-x-[-10px]
    "
          />
        </div>
        .
        <div
          className="absolute inset-y-0 left-0 -z-10 w-[65%]"
          style={{
            background:
              "linear-gradient(90deg, rgba(5,5,5,0.50) 0%, rgba(5,5,5,0.72) 0%, rgba(5,5,5,0.30) 0%, transparent 10%)",
          }}
        />
        {/* Bottom cinematic shadow */}
        <div
          className="absolute inset-x-0 bottom-0 -z-10 h-[45%]"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.22), rgba(0,0,0,0.18), transparent)",
          }}
        />
        {/* Top shadow */}
        <div
          className="
    absolute inset-x-0 top-0 -z-10
    h-130 md:h-32
    bg-[linear-gradient(to_bottom,rgba(0,0,0,0.42)_0%,rgba(0,0,0,0.20)_55%,transparent_100%)]
    md:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.25),transparent)]
  "
        />
        {/* Right dark vignette */}
        <div
          className="absolute inset-y-0 right-0 -z-10 w-[35%]"
          style={{
            background:
              "linear-gradient(270deg, rgba(0,0,0,0.12), transparent)",
          }}
        />
        {/* ================= CONTENT ================= */}
        <div className="relative mx-auto flex min-h-[620px] w-full max-w-[1450px] items-center px-6 py-24 sm:px-10 lg:min-h-[680px] lg:px-16 xl:px-20">
          {/* LEFT CONTENT */}
          <div className="relative z-10 max-w-[620px]">
            {/* Small brand label */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[3px] lg:w-8 w-5 bg-[#ff5e00]" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/90 sm:text-xs">
                Josh Thorpe Fitness & Injury
                Clinic
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-[54px] font-black leading-[0.88] tracking-[-0.045em] sm:text-[70px] lg:text-[82px] xl:text-[92px]">
              <span className="block">
                Stronger.
              </span>

              <span className="block">
                Faster.
              </span>

              <span className="block text-[#ff5e00]">
                Pain-Free.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-[440px] text-[12px] font-medium leading-[1.55] text-white/75 sm:text-[15px]">
              Expert-led fitness, rehab and injury
              recovery programmes to help you move
              better, perform higher and live
              pain-free.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-7">
              {/* CTA */}
              <a
                href="#contact"
                className="group inline-flex h-[52px] items-center gap-5 rounded-full bg-[#ff5e00] lg:px-7  px-4 lg:text-[13px] text-[11px] font-bold uppercase  text-white shadow-[0_10px_35px_rgba(255,94,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff6a12] hover:shadow-[0_14px_45px_rgba(255,94,0,0.38)]"
              >
                <span>
                  Book Your Consultation
                </span>

                <span className="flex h-7 w-7 items-center justify-center rounded-full  transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              {/* Story */}
              <a
                href="#about"
                className="group flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-white transition-opacity duration-300 hover:opacity-80"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/80 transition-all duration-300 group-hover:border-[#ff5e00] group-hover:bg-[#ff5e00]">
                  <span className="ml-[2px] text-[10px]">
                    ▶
                  </span>
                </span>

                <span>Watch Our Story</span>
              </a>
            </div>
          </div>

          {/* ================= RIGHT FEATURE LIST ================= */}

          <div className="absolute right-6 top-1/  hidden -translate-y-1/2 lg:block xl:right-14">
            <div className="flex flex-col gap-7">
              {/* Feature 01 */}
              <div className="flex items-center gap-4">
                <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[#ff5e00] bg-black/30 shadow-[0_0_20px_rgba(255,94,0,0.08)] backdrop-blur-sm">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5 text-[#ff5e00]"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      d="M12 3v18M7 7h10M6 12h12M8 17h8"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-[12px] font-bold uppercase tracking-wide text-white">
                    Expert
                  </p>
                  <p className="text-[12px] font-bold uppercase tracking-wide text-white/80">
                    Therapy
                  </p>
                </div>
              </div>

              {/* Feature 02 */}
              <div className="flex items-center gap-4">
                <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[#ff5e00] bg-black/30 shadow-[0_0_20px_rgba(255,94,0,0.08)] backdrop-blur-sm">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5 text-[#ff5e00]"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="8"
                    />
                    <path
                      d="M12 8v4l3 2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-[12px] font-bold uppercase tracking-wide text-white">
                    Personalised
                  </p>
                  <p className="text-[12px] font-bold uppercase tracking-wide text-white/80">
                    Plans
                  </p>
                </div>
              </div>

              {/* Feature 03 */}
              <div className="flex items-center gap-4">
                <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[#ff5e00] bg-black/30 shadow-[0_0_20px_rgba(255,94,0,0.08)] backdrop-blur-sm">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5 text-[#ff5e00]"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      d="M4 16l5-5 3 3 7-8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 6h4v4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-[12px] font-bold uppercase tracking-wide text-white">
                    Lasting
                  </p>
                  <p className="text-[12px] font-bold uppercase tracking-wide text-white/80">
                    Results
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= SLIDE INDICATOR ================= */}

          {/* <div className="absolute right-8 top-8 hidden items-center gap-2 lg:flex xl:right-16">
            <span className="text-[16px] font-bold text-white">
              01
            </span>

            <span className="text-[11px] text-white/50">
              / 04
            </span>
          </div> */}

          {/* ================= VERTICAL SIDE TEXT ================= */}

          <div className="absolute bottom-20 right-5 hidden xl:block">
            <p className="text-right text-[10px] font-bold uppercase leading-[1.7] tracking-[0.28em] text-white/55">
              MOVE
              <br />
              BETTER
              <br />
              LIVE
              <br />
              STRONGER
            </p>
          </div>

          {/* ================= SCROLL ================= */}

          <div className="absolute bottom-7 left-6 flex items-center gap-3 sm:left-10 lg:left-16">
            <div className="flex h-9 w-6 items-start justify-center rounded-full border border-white/70 pt-1.5">
              <span className="h-2 w-[2px] rounded-full bg-white/90" />
            </div>

            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/65">
              Scroll to explore
            </span>
          </div>
        </div>
        {/* ================= BOTTOM DARK VIGNETTE ================= */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.45), transparent)",
          }}
        />
      </section>

      <div className="orange-marquee" aria-hidden>
        <div className="orange-marquee__track">
          <span>RECOVER</span>
          <i /> <span>REBUILD</span>
          <i /> <span>PERFORM</span>
          <i /> <span>MOVE BETTER</span>
          <i />
          <span>RECOVER</span>
          <i /> <span>REBUILD</span>
          <i /> <span>PERFORM</span>
          <i /> <span>MOVE BETTER</span>
          <i />
        </div>
      </div>

      <section
        id="about"
        className="relative w-full min-h-screen bg-[#fafafa] overflow-hidden py-24 flex items-center font-sans"
      >
        {/* =========================================================================
          BACKGROUND DECORATION: Abstract Orange Slanted Blocks & Vectors
         ========================================================================= */}

        <div className=" z-10 w-full max-w-[1640px] mx-auto pl-4 sm:px-12 lg:pl-16 lg:pr-0 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 flex items-center relative w-full">
            {/* Desktop par bg-cover rahega aur mobile par bg-contain taake image na kate */}
            <div
              style={{
                backgroundImage:
                  "url('/about1.webp')",
              }}
              className="w-full h-[350px] md:h-[550px] rounded-2xl bg-[length:100%_auto] md:bg-cover bg-center bg-no-repeat"
            ></div>
          </div>

          {/* 2. CENTER GRID COLUMN: Corporate Copy Texts & Badges Matrix (Spans 4 Columns) */}
          <div className="lg:col-span-4 flex flex-col justify-center pl-2 text-left lg:px-4 mt-8 lg:mt-0">
            {/* Section Indicator top title */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-7 h-[3px] bg-[#ff5500]" />
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#ff5500]">
                ABOUT JOSH THORPE FITNESS & INJURY
                CLINIC
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl font-black tracking-wide text-[#1a1d24] leading-[1.08] mb-6">
              Expert Care.
              <br />
              <span className="text-[#ff5500]">
                Real Results.
              </span>
            </h2>

            {/* Description Block */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 font-medium">
              At Josh Thorpe Fitness & Injury
              Clinic, we combine advanced
              assessment, hands-on therapy and
              personalised training to help you
              recover, move better and reach your
              goals — without the pain.
            </p>

            {/* Features Inline Row (Three custom item blocks with rounded outline badges) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 sm:gap-2 lg:gap-4 mb-10 w-full">
              {/* Feature Item 1 */}
              <div className="flex items-center gap-3 group">
                <div className="w-11 h-11 rounded-full border-2 border-[#ff5500] flex items-center justify-center text-[#ff5500] font-bold p-2 shrink-0 bg-white">
                  <svg
                    className="w-5.5 h-5.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="text-[15px] font-extrabold text-[#414141] tracking-wide leading-tight">
                  Evidence-Based Approach
                </span>
              </div>

              {/* Feature Item 2 */}
              <div className="flex items-center gap-3 group">
                <div className="w-11 h-11 rounded-full border-2 border-[#ff5500] flex items-center justify-center text-[#ff5500] font-bold p-2 shrink-0 bg-white">
                  <svg
                    className="w-5.5 h-5.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </div>
                <span className="text-[15px] font-extrabold text-[#414141] tracking-wide leading-tight">
                  Personalised Programs
                </span>
              </div>

              {/* Feature Item 3 */}
              <div className="flex items-center gap-3 group">
                <div className="w-11 h-11 rounded-full border-2 border-[#ff5500] flex items-center justify-center text-[#ff5500] font-bold p-2 shrink-0 bg-white">
                  <svg
                    className="w-5.5 h-5.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                    />
                  </svg>
                </div>
                <span className="text-[15px] font-extrabold text-[#414141] tracking-wide leading-tight">
                  Long-Term Results
                </span>
              </div>
            </div>

            {/* Action Outline Button Link */}
            <div className="flex">
              <a
                href="#services"
                className="group gap-3 border-2 border-[#ff5500] hover:border-[#ff5500] text-[#ff5500] hover:text-[#ffffff] hover:bg-[#ff5500] px-7 py-2 text-[15px] font-bold rounded-full transition-all duration-300 flex justify-center items-center"
              >
                {/* 2. Text aur Arrow dono par group-hover:text-white lagaya hai */}
                <span className="text-[#ff5500] group-hover:text-[#ffffff] transition-colors duration-300 ">
                  Learn More
                </span>
                <span className="text-[20px] font-bold text-[#ff5500] group-hover:text-[#ffffff] transition-colors duration-300 ">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* 3. RIGHT GRID COLUMN: Extreme Edge Right Gym Photo Cutout (Spans 3 Columns) */}
          <div className="lg:col-span-3 hidden lg:flex items-center h-full justify-end relative pr-6">
            <div
              style={{
                backgroundImage:
                  "url('/about2.webp')",
              }}
              className="w-full h-[550px] bg-center bg-no-repeat bg-contain "
            ></div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="relative overflow-hidden bg-black/80  py-24 sm:py-28 lg:py-36 bg-center bg-no-repeat bg-contain"
        style={{
          backgroundImage:
            "url('/services.webp')",
        }}
      >
        {/* Ambient decorative glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-white/[0.025] blur-[120px]"
        />

        <div className="container-jtf relative mx-auto">
          <div className="flex flex-col  gap-14 lg:flex-row lg:items-center lg:gap-16 xl:gap-24">
            <div className="w-full lg:w-[35%] pl-3">
              <div className="reveal">
                <SectionLabel light>
                  Our Services
                </SectionLabel>
              </div>

              <div className="mt-5 ">
                <h2 className="max-w-[520px] text-[clamp(2.5rem,4vw,4.7rem)] font-bold leading-[0.98] tracking-[-0.055em] text-white">
                  Comprehensive Care.
                  <br />
                  <span className="text-[#ff5500]">
                    Tailored to You.
                  </span>
                </h2>
              </div>
              <p className="mt-7 max-w-[470px] text-[15px] leading-7 text-white/55 sm:text-base">
                From injury recovery to peak
                performance, every service is
                built around your body, goals and
                lifestyle.
              </p>

              <a
                href="#contact"
                className=" flex items-center gap-3 border-b border-white/20 pb-2 text-sm font-medium text-white transition-all duration-500 hover:border-white/70"
              >
                {/* <span>View all services</span> */}

                <span className="transition-transform duration-500 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </a>

              <div className="mt-12 flex items-center gap-3">
                <button
                  type="button"
                  aria-label="Previous services"
                  onClick={() =>
                    setServiceIndex((prev) =>
                      prev === 0
                        ? Math.max(
                            services.length - 2,
                            0,
                          )
                        : prev - 1,
                    )
                  }
                  className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.025] text-white/60 backdrop-blur-md transition-all duration-500 hover:border-white/40 hover:bg-white/[0.07] hover:text-white"
                >
                  <span className="text-lg transition-transform duration-300 group-hover:-translate-x-0.5">
                    ←
                  </span>
                </button>

                <button
                  type="button"
                  aria-label="Next services"
                  onClick={() =>
                    setServiceIndex((prev) =>
                      prev >= services.length - 2
                        ? 0
                        : prev + 1,
                    )
                  }
                  className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.025] text-white/60 backdrop-blur-md transition-all duration-500 hover:border-white/40 hover:bg-white/[0.07] hover:text-white"
                >
                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-0.5">
                    →
                  </span>
                </button>

                {/* Progress */}
                <div className="ml-3 flex items-center gap-2">
                  {services.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      aria-label={`Go to service ${index + 1}`}
                      onClick={() =>
                        setServiceIndex(
                          Math.min(
                            index,
                            Math.max(
                              services.length - 2,
                              0,
                            ),
                          ),
                        )
                      }
                      className={`h-[2px] transition-all duration-500 ${
                        index === serviceIndex
                          ? "w-8 bg-white"
                          : "w-3 bg-white/20"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* =========================================
          RIGHT SERVICE SLIDER
      ========================================= */}
            <div className="w-full lg:w-[65%]">
              <div className="relative overflow-hidden">
                <div
                  className="flex gap-5 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:gap-6"
                  style={{
                    transform: `translateX(
      ${
        !isMobile
          ? `-\${serviceIndex * (50 + 1.25)}%`
          : `-\${serviceIndex * 100}%`
      }
    )`,
                  }}
                >
                  {services.map(
                    (service, index) => (
                      <article
                        key={service.title}
                        className="group relative min-w-0 shrink-0 basis-full sm:basis-[calc(50%-12px)]"
                      >
                        {/* IMAGE CARD */}
                        <div className="relative h-[440px] overflow-hidden rounded-[2px] bg-[#1a1a1a] sm:h-[500px] lg:h-[560px]">
                          <Image
                            src={service.image}
                            fill
                            alt={`${service.title} session`}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.045]"
                          />

                          {/* Dark premium overlay */}
                          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/80" />

                          {/* Soft bottom blur */}
                          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/75 to-transparent" />

                          {/* Number */}
                          <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/10 text-[11px] tracking-[0.15em] text-white backdrop-blur-md">
                            {String(
                              index + 1,
                            ).padStart(2, "0")}
                          </div>

                          {/* Top line */}
                          <div className="absolute left-5 right-5 top-5 h-px bg-gradient-to-r from-white/50 via-white/10 to-transparent" />

                          {/* Content */}
                          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 lg:p-8">
                            <div className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-white/50">
                              {service.kicker}
                            </div>

                            <h3 className="max-w-[320px] text-[clamp(1.65rem,2.5vw,2.6rem)] font-medium leading-[1.05] tracking-[-0.035em] text-white">
                              {service.title}
                            </h3>

                            <p className="mt-4 max-w-[360px] text-sm leading-6 text-white/65">
                              {service.body}
                            </p>

                            <a
                              href="#contact"
                              className="group/link mt-6 inline-flex items-center gap-2 text-sm text-white"
                            >
                              <span className="border-b border-white/20 pb-1 transition-colors duration-300 group-hover/link:border-white/70">
                                Learn More
                              </span>

                              <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                                <ArrowIcon />
                              </span>
                            </a>
                          </div>
                        </div>
                      </article>
                    ),
                  )}
                </div>

                {/* Edge fade */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#111111] to-transparent"
                />

                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#111111] to-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate  bg-[#f8f8f6] py-16 lg:min-h-[355px] lg:py-0">
        {/* ================= BACKGROUND DESIGN ================= */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          {/* Huge soft diagonal shape */}
          <div
            className="absolute -left-[4%] bottom-[-72%] h-[650px] w-[210px] rotate-[35deg]"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,94,0,0.12), rgba(255,94,0,0.025))",
            }}
          />

          {/* Main translucent diagonal */}
          <div
            className="absolute left-[28%] -top-[60%] h-[850px] w-[155px] rotate-[34deg]"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.95), rgba(255,94,0,0.10), rgba(255,94,0,0.03))",
            }}
          />

          {/* Large pale grey diagonal */}
          <div
            className="absolute right-[15%] -top-[85%] h-[950px] w-[250px] rotate-[69deg]"
            style={{
              background:
                "linear-gradient(180deg, rgba(210,213,213,0.13), rgba(255,255,255,0.65))",
            }}
          />

          {/* Right subtle diagonal */}
          <div
            className="absolute right-[-8%] -top-[40%] h-[700px] w-[145px] rotate-[68deg]"
            style={{
              background:
                "linear-gradient(180deg, rgba(220,220,218,0.15), rgba(255,255,255,0))",
            }}
          />

          {/* Very subtle top highlight */}
          <div className="absolute inset-x-0 top-0 h-px bg-black/[0.04]" />
        </div>

        {/* ================= CONTENT ================= */}
        <div className="relative mx-auto flex w-full max-w-[1440px] flex-col px-7 sm:px-10 lg:min-h-[355px] lg:flex-row lg:px-16 xl:px-[65px]">
          {/* ================= LEFT INTRO ================= */}
          <div className="flex w-full flex-col justify-center py-3 lg:w-[34%] lg:pr-10">
            {/* Label */}
            <div className="mb-2.5 flex items-center gap-3">
              <span className="h-[3px] w-[31px] bg-[#ff5e00]" />

              <span className="text-[13px] font-bold uppercase tracking-[0.13em] text-[#151c22]">
                The Numbers
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-[36px] font-extrabold leading-[0.98] tracking-[-0.035em] text-[#111820] sm:text-[34px] lg:text-[35px]">
              Real People.
              <br />
              Real Progress.
            </h2>

            {/* Description */}
            <p className="mt-3 max-w-[285px] text-[16px] font-medium leading-[1.45] text-[#5f6569]">
              Our results speak for themselves.
              Here's what we've achieved together.
            </p>

            {/* Button */}
            <div className="mt-4">
              <a
                href="#results"
                className="group
          mt-5
          flex
          h-[45px]
          w-fit
          items-center
          gap-3
          rounded-full
          border-[1.5px]
          border-[#FF8A59]
          bg-white
          px-[21px]
          text-[10px]
          font-[700]
          text-[#FF5E1A]
          no-underline
          shadow-[0_6px_20px_rgba(255,94,26,0.05)]
          transition-all
          duration-300
          hover:bg-[#FF5E1A]
          hover:text-white
          hover:shadow-[0_10px_30px_rgba(255,94,26,0.16)]"
              >
                <span className="text-[13px]">
                  See Our Results
                </span>

                <span className="text-[17px] leading-none transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* ================= STATS ================= */}
          <div className="grid w-full grid-cols-2 lg:flex lg:w-[66%]">
            {/* ================= STAT 1 ================= */}
            <div className="relative flex flex-col justify-center px-5 py-8 lg:w-1/4 lg:px-7 xl:px-9">
              <div className="mb-4 h-9.75 w-9.75 text-[#ff5e00]">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  className="h-full w-full"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <circle
                    cx="16"
                    cy="9"
                    r="3.5"
                  />
                  <path
                    d="M10 26c.7-5 2.7-8 6-8s5.3 3 6 8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M5.5 18c1.3-2.5 3.1-3.5 5-3.5M26.5 18c-1.3-2.5-3.1-3.5-5-3.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7 23c-1.2-1.3-1.5-2.8-1-4.5M25 23c1.2-1.3 1.5-2.8 1-4.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <strong className="text-[34px] font-extrabold leading-none tracking-[-0.04em] text-[#111820] sm:text-[39px]">
                500
                <span className="text-[#ff5e00]">
                  +
                </span>
              </strong>

              <span className="mt-2 text-[16px] font-medium text-[#5e6468]">
                Clients Treated
              </span>

              {/* Separator */}
              <span className="absolute right-0 top-1/2 hidden h-[72px] w-px -translate-y-1/2 bg-[#c9ccce] lg:block" />
            </div>

            {/* ================= STAT 2 ================= */}
            <div className="relative flex flex-col justify-center px-5 py-8 lg:w-1/4 lg:px-7 xl:px-9">
              <div className="mb-4 h-9.75 w-9.75 text-[#ff5e00]">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  className="h-full w-full"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 27s-9-5.2-9-12.1C7 11.6 9 9 12 9c1.7 0 3.1.8 4 2.1C16.9 9.8 18.3 9 20 9c3 0 5 2.6 5 5.9C25 21.8 16 27 16 27Z" />
                  <path d="m12.2 16.2 2.2 2.2 5.5-5.7" />
                </svg>
              </div>

              <strong className="text-[34px] font-extrabold leading-none tracking-[-0.04em] text-[#111820] sm:text-[39px]">
                100
                <span className="text-[#ff5e00]">
                  %
                </span>
              </strong>

              <span className="mt-2 text-[16px] font-medium text-[#5e6468]">
                Injury Recovery Rate
              </span>

              <span className="absolute right-0 top-1/2 hidden h-[72px] w-px -translate-y-1/2 bg-[#c9ccce] lg:block" />
            </div>

            {/* ================= STAT 3 ================= */}
            <div className="relative flex flex-col justify-center px-5 py-8 lg:w-1/4 lg:px-7 xl:px-9">
              <div className="mb-4 h-9.75 w-9.75 text-[#ff5e00]">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  className="h-full w-full"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="16" cy="8" r="3" />
                  <path d="M16 11v7" />
                  <path d="M16 14 11 11" />
                  <path d="M16 14l5-3" />
                  <path d="M13 18 9 25" />
                  <path d="M19 18l4 7" />
                  <path d="M11 21h10" />
                </svg>
              </div>

              <strong className="text-[34px] font-extrabold leading-none tracking-[-0.04em] text-[#111820] sm:text-[39px]">
                3,500
                <span className="text-[#ff5e00]">
                  +
                </span>
              </strong>

              <span className="mt-2 text-[16px] font-medium text-[#5e6468]">
                Training Sessions
              </span>

              <span className="absolute right-0 top-1/2 hidden h-[72px] w-px -translate-y-1/2 bg-[#c9ccce] lg:block" />
            </div>

            {/* ================= STAT 4 ================= */}
            <div className="flex flex-col justify-center px-5 py-8 lg:w-1/4 lg:px-7 xl:px-9">
              <div className="mb-4 h-9.75 w-9.75 text-[#ff5e00]">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  className="h-full w-full"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 23c3-7 5-11 8-11s5 4 8 11" />
                  <path d="M8 23h16" />
                  <path d="M12 17c1.2-1.5 2.4-2.2 4-2.2s2.8.7 4 2.2" />
                  <circle
                    cx="16"
                    cy="9"
                    r="2.5"
                  />
                </svg>
              </div>

              <strong className="text-[34px] font-extrabold leading-none tracking-[-0.04em] text-[#111820] sm:text-[39px]">
                8
                <span className="text-[#ff5e00]">
                  +
                </span>
              </strong>

              <span className="mt-2 text-[16px] font-medium text-[#5e6468]">
                Years of Experience
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="process"
        className="
    relative overflow-hidden
    bg-white
    px-5 py-10
    sm:px-7 sm:py-12
    md:px-8 md:py-14
    lg:px-10 lg:py-8
    xl:px-16
    lg:h-[355px]
    flex items-center justify-center
  "
      >
        {/* Subtle premium background glow */}
        <div
          aria-hidden="true"
          className="
      pointer-events-none absolute
      -top-28 left-[38%]
      h-[355px] w-[420px]
      rotate-[8deg]
      bg-[#faf9f7]
      blur-[2px]
    "
        />

        <div
          aria-hidden="true"
          className="
      pointer-events-none absolute
      right-[-100px] top-[-80px]
      h-[355px] w-[320px]
      rounded-full
      bg-[#fff8f3]
      blur-[80px]
    "
        />

        <div
          className="
      relative z-10
      mx-auto
      flex w-full max-w-[1380px]
      flex-col
      lg:flex-row
      lg:items-center
    "
        >
          {/* =========================
        LEFT INTRO
    ========================== */}
          <div
            className="
        w-full
        pb-9
        sm:pb-10
        md:pb-12
        lg:w-[31%]
        lg:shrink-0
        lg:pb-0
        lg:pr-[42px]
        xl:pr-[52px]
      "
          >
            {/* Label */}
            <div
              className="
          mb-3
          flex items-center gap-2.5
        "
            >
              <span
                className="
            h-[4px]
            w-[31px]
            shrink-0
            bg-[#FF5E1A]
          "
              />

              <span
                className="
            text-[12px]
            font-[700]
            uppercase
            tracking-[0.12em]
            text-[#444]
            sm:text-[13px]
          "
              >
                The Process
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
          m-0
          max-w-[360px]
          text-[30px]
          font-[800]
          leading-[1.05]
          tracking-[-0.045em]
          text-[#111820]
          sm:text-[32px]
          md:text-[34px]
          lg:text-[29px]
          xl:text-[31px]
        "
            >
              Your Journey to a
              <br />
              <span className="text-[#111820]">
                Stronger, Healthier You.
              </span>
            </h2>

            {/* Description */}
            <p
              className="
          mt-4
          max-w-[310px]
          text-[14px]
          font-[400]
          leading-[1.55]
          tracking-[0.005em]
          text-[#5f6569]
          sm:text-[15px]
          md:text-[16px]
          lg:text-[14px]
          xl:text-[16px]
        "
            >
              A simple, proven 4-step process
              designed around your goals,
              lifestyle and recovery.
            </p>

            {/* Button */}
            <a
              href="#contact"
              className="
          group
          mt-5
          flex
          h-[45px]
          w-fit
          items-center
          gap-3
          rounded-full
          border-[1.5px]
          border-[#FF8A59]
          bg-white
          px-[21px]
          text-[12px]
          font-[700]
          text-[#FF5E1A]
          no-underline
          shadow-[0_6px_20px_rgba(255,94,26,0.05)]
          transition-all
          duration-300
          hover:bg-[#FF5E1A]
          hover:text-white
          hover:shadow-[0_10px_30px_rgba(255,94,26,0.16)]
        "
            >
              <span className="text-[13px] sm:text-[14px]">
                Start Your Journey
              </span>

              <ArrowIcon
                className="
            shrink-0
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
              />
            </a>
          </div>

          {/* =========================
        RIGHT PROCESS
    ========================== */}
          <div
            className="
        grid
        w-full
        grid-cols-1
        border-t
        border-[#dedede]
        sm:grid-cols-2
        lg:w-[69%]
        lg:grid-cols-4
        lg:border-t-0
      "
          >
            {process.map(
              ([num, title, body], index) => (
                <div
                  key={num}
                  className={`
              group
              relative
              min-h-[220px]
              px-5
              py-7

              sm:min-h-[225px]
              sm:px-6
              sm:py-7

              md:min-h-[235px]
              md:px-7

              lg:min-h-0
              lg:h-[205px]
              lg:px-[25px]
              lg:py-[7px]

              ${
                index !== 0
                  ? "border-t border-[#dedede] sm:border-t-0"
                  : ""
              }

              ${
                index % 2 !== 0
                  ? "sm:border-l sm:border-[#dedede]"
                  : ""
              }

              ${
                index !== 0
                  ? "lg:border-l lg:border-[#dedede]"
                  : ""
              }
            `}
                >
                  {/* Very subtle vertical accent */}
                  <div
                    className="
                pointer-events-none
                absolute
                bottom-0 left-0
                h-0 w-[2px]
                bg-[#FF5E1A]
                transition-all
                duration-500
                group-hover:h-full
              "
                    aria-hidden="true"
                  />

                  {/* Top number + icon */}
                  <div
                    className="
                flex
                items-start
                justify-between
              "
                  >
                    {/* Big faded number */}
                    <div
                      className="
                  select-none
                  text-[55px]
                  font-[800]
                  leading-[0.9]
                  tracking-[-0.065em]
                  text-[#e1e3e5]
                  sm:text-[60px]
                  md:text-[62px]
                  lg:text-[59px]
                "
                    >
                      {num}
                    </div>

                    {/* ICON */}
                    <div
                      className="
                  mt-[27px]
                  flex
                  h-[35px]
                  w-[35px]
                  shrink-0
                  items-center
                  justify-center
                  text-[#FF5E1A]
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
                    >
                      {/* Assessment */}
                      {index === 0 && (
                        <svg
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-7 w-7"
                        >
                          <path
                            d="M9 5.5H23C24.1 5.5 25 6.4 25 7.5V25.5C25 26.05 24.55 26.5 24 26.5H8C7.45 26.5 7 26.05 7 25.5V7.5C7 6.4 7.9 5.5 9 5.5Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 10H20"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M12 14H20"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M12 18H17"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M11 4V7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M21 4V7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      )}

                      {/* Plan */}
                      {index === 1 && (
                        <svg
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-7 w-7"
                        >
                          <path
                            d="M9 7H20.5C21.88 7 23 8.12 23 9.5V21H11.5C10.12 21 9 19.88 9 18.5V7Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9 21C9 19.34 10.34 18 12 18H23"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M13 11H18"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M13 14.5H17"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M21.5 11L25 14.5L21.5 18"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}

                      {/* Execute */}
                      {index === 2 && (
                        <svg
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-7 w-7"
                        >
                          <path
                            d="M7 17.5L11.5 12L15 16L20.5 9L25 13.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.5 12L9.5 10"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M20.5 9L22.5 11"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <circle
                            cx="7"
                            cy="17.5"
                            r="2"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                          <circle
                            cx="25"
                            cy="13.5"
                            r="2"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                        </svg>
                      )}

                      {/* Results */}
                      {index === 3 && (
                        <svg
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-7 w-7"
                        >
                          <path
                            d="M6 25V8"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M6 25H26"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M10 21V18"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M14 21V15"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M18 21V12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M22 21V9"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M15 9L18 6L21 9"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="
                mt-[14px]
                text-[12px]
                font-[800]
                uppercase
                leading-none
                tracking-[0.01em]
                text-[#20262b]
                sm:text-[14px]
                md:text-[15px]
                lg:text-[16px]
              "
                  >
                    {title}
                  </h3>

                  {/* Body */}
                  <p
                    className="
                mt-[11px]
                max-w-[220px]
                text-[12px]
                font-[400]
                leading-[1.55]
                text-[#777]
                sm:text-[12px]
                md:text-[13px]
                lg:text-[13px]
              "
                  >
                    {body}
                  </p>

                  {/* Desktop connecting arrow */}
                  {index < 3 && (
                    <div
                      aria-hidden="true"
                      className="
                  absolute
                  right-[-14px]
                  top-1/2
                  z-20
                  hidden
                  -translate-y-1/2
                  lg:flex
                  h-[28px]
                  w-[28px]
                  items-center
                  justify-center
                  bg-white
                "
                    >
                      <span
                        className="
                    text-[20px]
                    font-[300]
                    text-[#c9c9c9]
                  "
                      >
                        →
                      </span>
                    </div>
                  )}
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section
        id="results"
        className="results-section bg-contain bg-center bg-no-repeat relative overflow-hidden"
        style={{
          backgroundImage: "url('/results.webp')",
        }}
      >
        <div className="" aria-hidden>
          <div className="results-overlay" />
          <div className="results-orange results-orange--a" />
          <div className=" absolute right-0 bottom-0 bg-orange-600 w-110 h-60 rotate-125 translate-x-70 translate-y-10" />
          <div className="results-orange results-orange--b" />
          <div className="results-orange results-orange--c" />
        </div>
        <div className="container-jtf results-layout">
          <div className="results-copy reveal">
            <SectionLabel light>
              Real Results
            </SectionLabel>
            <h2 className="font-bold">
              From Pain to
              <br />
              <span>Performance.</span>
            </h2>
            <p className="text-[15px]">
              See how personalised programmes
              support recovery, rebuild confidence
              and keep people moving forward.
            </p>
            <a
              className="orange-button"
              href="#contact"
            >
              View More Transformations{" "}
              <ArrowIcon />
            </a>
          </div>
          <div className="results-collage reveal">
            <div className="results-card results-card--large">
              <Image
                src={"/before.webp"}
                fill
                alt="Knee rehabilitation and movement support"
              />
              <span className="border-b-2 border-[ffffff2e] w-20 pb-1">
                BEFORE
              </span>
            </div>
            <div className="results-card results-card--small">
              <Image
                src={"/after.webp"}
                fill
                alt="Personal coaching and movement training"
              />
              <span className="border-b-2 border-orange-600 w-20 pb-1">
                AFTER
              </span>
            </div>
            <div className="results-stat-stack">
              <div>
                <strong>92%</strong>
                <span>LESS PAIN</span>
              </div>
              <div>
                <strong>87%</strong>
                <span>IMPROVED MOBILITY</span>
              </div>
              <div>
                <strong>78%</strong>
                <span>INCREASED STRENGTH</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="light-section testimonials-section section-pad">
        <div
          className="testimonial-glow"
          aria-hidden
        />
        <div className="container-jtf">
          <div className="testimonial-head reveal">
            <div>
              <SectionLabel>
                Testimonials
              </SectionLabel>
              <h2>
                Real Stories.
                <br />
                <span>Lasting Impact.</span>
              </h2>
            </div>
            <div className="slider-controls">
              <button
                onClick={() =>
                  setTestimonial(
                    (value) =>
                      (value -
                        1 +
                        testimonials.length) %
                      testimonials.length,
                  )
                }
                aria-label="Previous testimonial"
              >
                <ChevronIcon left />
              </button>
              <span>
                0{testimonial + 1} <em>/ 03</em>
              </span>
              <button
                onClick={() =>
                  setTestimonial(
                    (value) =>
                      (value + 1) %
                      testimonials.length,
                  )
                }
                aria-label="Next testimonial"
              >
                <ChevronIcon />
              </button>
            </div>
          </div>
          <div className="testimonial-stage reveal">
            <div className="testimonial-avatar">
              <span>
                {current.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </span>
            </div>
            <div className="testimonial-quote">
              “
            </div>
            <blockquote>
              {current.quote}
            </blockquote>
            <div className="testimonial-meta">
              <strong>{current.name}</strong>
              <span>{current.meta}</span>
            </div>
            <div className="testimonial-stars">
              ★★★★★
            </div>
            <div
              className="testimonial-dots"
              role="tablist"
              aria-label="Testimonials"
            >
              {testimonials.map((item, index) => (
                <button
                  role="tab"
                  aria-selected={
                    testimonial === index
                  }
                  aria-label={`Testimonial ${index + 1}`}
                  key={item.name}
                  className={
                    testimonial === index
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setTestimonial(index)
                  }
                />
              ))}
            </div>
          </div>

          <div className="josh-story">
            <div className="josh-photo-wrap reveal">
              <div
                className="josh-orange-block"
                aria-hidden
              />
              <img
                src={"/josh.webp"}
                alt="Josh Thorpe, founder and coach"
                className="josh-photo"
              />
            </div>
            <div className="josh-copy reveal">
              <SectionLabel>
                Meet Josh Thorpe
              </SectionLabel>
              <h2>
                Your Coach.
                <br />
                <span>Your Support.</span>
                <br />
                Your Results.
              </h2>
              <p>
                Josh brings together sports
                therapy, rehabilitation and
                performance coaching with a
                personal approach that keeps every
                programme grounded in what matters
                to you.
              </p>
              <div className="josh-tags">
                <span>SPORTS THERAPY</span>
                <span>REHABILITATION</span>
                <span>PERFORMANCE</span>
              </div>
              <a
                href="#contact"
                className="outline-button"
              >
                Meet Josh <ArrowIcon />
              </a>
            </div>
            <div
              className={`h-60 w-60 bg-center bg-no-repeat bg-cover lg:flex hidden`}
              style={{
                backgroundImage:
                  "url('/sign.webp')",
              }}
            ></div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="booking-section"
      >
        <div className="booking-bg" aria-hidden>
          <Image
            src={"/footer.webp"}
            alt=""
            fill
          />
          <div className="booking-overlay" />
          <div className="booking-orange" />
        </div>
        <div className="container-jtf booking-layout">
          <div className="booking-copy reveal">
            <SectionLabel light>
              Book Your Consultation
            </SectionLabel>
            <h2 className="font-bold">
              Take the First Step
              <br />
              Toward a <span>Stronger You.</span>
            </h2>
            <p>
              Your goals. Our expertise. Real
              support from assessment through
              recovery, training and performance.
            </p>
            <div className="booking-contact-row">
              <a
                href="#contact"
                className="outline-button"
              >
                Meet Josh <ArrowIcon />
              </a>
            </div>
          </div>
          <form
            className="booking-form reveal"
            onSubmit={submit}
          >
            <div className="booking-form-head">
              <span>GET STARTED</span>
              <strong>
                Tell us what you need.
              </strong>
            </div>
            <div className="form-grid">
              <label>
                Full Name
                <input
                  required
                  name="name"
                  placeholder="Your name"
                />
              </label>
              <label>
                Email Address
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label>
              Service Interested In
              <select
                name="service"
                defaultValue="Sports Therapy"
              >
                <option>Sports Therapy</option>
                <option>Personal Training</option>
                <option>
                  Injury Rehabilitation
                </option>
                <option>
                  Performance Coaching
                </option>
                <option>
                  Mobility & Recovery
                </option>
              </select>
            </label>
            <label>
              Message{" "}
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us a little about your goals, training or injury..."
              />
            </label>
            <button
              className="orange-button orange-button--full"
              type="submit"
            >
              {formSent
                ? "Message Ready"
                : "Send Message"}{" "}
              <ArrowIcon />
            </button>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div
          className="footer-glow"
          aria-hidden
        />
        <div className="container-jtf">
          <div className="footer-main">
            <div className="footer-brand">
              <Image
                src="/images/logo.webp"
                width={80}
                height={80}
                alt="Josh Thorpe Fitness & Injury Clinic z-100"
              />
              <div>
                <strong>
                  JOSH THORPE FITNESS & INJURY
                  CLINIC
                </strong>
                <span>
                  STRONGER. FASTER. PAIN-FREE.
                </span>
              </div>
            </div>
            <nav
              className="footer-nav"
              aria-label="Footer navigation"
            >
              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Services", "#services"],
                ["Results", "#results"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a key={label} href={href}>
                  {label}
                </a>
              ))}
            </nav>
            <div className="footer-social z-100">
              <a
                href="#contact"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#contact"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#contact"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
              <a
                href="#contact"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div className="footer-bottom z-100">
            <span>
              © 2026 Josh Thorpe Fitness & Injury
              Clinic. All rights reserved.
            </span>
            <span>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
