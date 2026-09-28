"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  MoveUpRight,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa6";
import Script from "next/script";
import { useEffect } from "react";

const instagramPosts = [
  {
    src: "/about/abo1.webp",
    alt: "Josh Thorpe Fitness Instagram training content",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/about/abo2.webp",
    alt: "Josh Thorpe training in the gym",
    className: "",
  },
  {
    src: "/about/abo3.webp",
    alt: "Josh Thorpe demonstrating a rehabilitation exercise",
    className: "",
  },
];

const strengths = [
  "Personalised support built around your goals",
  "Sports injury and rehabilitation experience",
  "Support for athletes and everyday gym-goers",
  "In-person and online coaching experience",
];

export default function Abouts() {
  return (
    <main className="overflow-hidden bg-[#f4f3ef] text-[#171717]">
      {/* =========================================================
          HERO
          
      ========================================================== */}

      <section
        className="
    relative min-h-screen overflow-hidden
    border-b border-white/10
    bg-[#282828]
    text-white
  "
      >
        {/* Background Gradient — SAME SERVICES FEEL */}
        <div className="pointer-events-none absolute inset-0">
          {/* Main left-to-right gradient */}
          <div
            className="
        absolute inset-0
        bg-gradient-to-r
        from-[#282828]
        via-[#282828]/90
        to-[#282828]/35
      "
          />

          {/* Bottom dark fade */}
          <div
            className="
        absolute inset-0
        bg-gradient-to-t
        from-[#282828]
        via-transparent
        to-[#282828]/40
      "
          />

          {/* Soft orange glow */}
          <div
            className="
        absolute
        -right-40
        top-10
        h-[500px]
        w-[500px]
        rounded-full
        bg-[#FF5E1A]/20
        blur-[150px]
      "
          />
        </div>

        {/* Huge background type */}
        <div
          aria-hidden="true"
          className="
      pointer-events-none
      absolute
      -right-[5%]
      top-[18%]
      select-none
      text-[20vw]
      font-semibold
      uppercase
      leading-none
      tracking-[-0.09em]
      text-white/[0.035]
    "
        >
          JOSH
        </div>

        {/* Right vertical line */}
        <div
          className="
      pointer-events-none
      absolute
      right-[8%]
      top-0
      hidden
      h-full
      w-px
      bg-white/[0.08]
      lg:block
    "
        />

        <div className="relative mx-auto flex min-h-screen max-w-[1600px] items-end px-5 pb-10 pt-15 sm:px-8 sm:pb-12 lg:px-12 lg:pb-14">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            {/* LEFT */}
            <div className="relative z-10">
              {/* Side decoration */}
              <div className="mb-9 mt-10 md:mt-0 flex items-center gap-5">
                <div className="mb-7 flex items-center gap-4">
                  <span className="h-[2px] w-12 bg-[#FF5E1A]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 sm:text-xs">
                    Josh Thorpe
                  </span>
                </div>
              </div>

              <h1
                className="
            max-w-[930px]
            text-[clamp(4rem,9vw,9rem)]
            font-bold
            leading-[0.8]
            tracking-[-0.075em]
            text-white
          "
              >
                About{" "}
                <span className="relative inline-block text-[#FF5E1A]">
                  me
                </span>
                <span className="ml-2 text-[#FF5E1A]">
                  .
                </span>
              </h1>

              <p
                className="
            mt-9
            max-w-[620px]
            text-base
            leading-7
            text-white/65
            sm:text-lg
            sm:leading-8
          "
              >
                Hi, I’m Josh, a dedicated Sports
                Therapist and online coach. I’m
                passionate about helping people
                feel, move and perform their best.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/services"
                  className="
              group
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-[#FF5E1A]
              px-6
              py-4
              text-sm
              font-medium
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
            "
                >
                  Explore my services
                  <span
                    className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                bg-white/10
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
                  >
                    <ArrowUpRight size={14} />
                  </span>
                </Link>

                <a
                  href="#story"
                  className="
              group
              inline-flex
              items-center
              gap-2
              px-2
              py-3
              text-sm
              text-white/50
              transition-colors
              hover:text-white
            "
                >
                  Scroll to discover
                  <ArrowDownRight
                    size={16}
                    className="
                transition-transform
                duration-300
                group-hover:translate-y-1
                group-hover:translate-x-1
              "
                  />
                </a>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative mx-auto w-full max-w-[620px] lg:justify-self-end">
              {/* decorative circle */}
              <div
                className="
            absolute
            -right-5
            -top-8
            h-24
            w-24
            rounded-full
            border
            border-white/10
            sm:-right-8
            sm:-top-10
            sm:h-32
            sm:w-32
          "
              />

              {/* decorative line */}
              <div
                className="
            absolute
            -bottom-7
            -left-7
            hidden
            h-28
            w-[1px]
            bg-white/15
            sm:block
          "
              />

              {/* image frame */}
              <div className="relative">
                <div
                  className="
              absolute
              -inset-3
              rounded-[34px]
              bg-white/[0.035]
            "
                />

                <div
                  className="
              group
              relative
              aspect-[0.82]
              overflow-hidden
              rounded-[28px]
              bg-[#333333]
            "
                >
                  <Image
                    src="/josh.webp"
                    alt="Josh Thorpe"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 50vw"
                    className="
                object-cover
                object-center
                grayscale
                transition
                duration-1000
                ease-out
                group-hover:scale-[1.025]
              "
                  />

                  {/* Image subtle gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#282828]/80 via-transparent to-transparent" />

                  {/* image bottom info */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.25em] text-white/55">
                        Sports Therapist
                      </p>

                      <p className="mt-1 text-lg font-medium text-[white]">
                        Josh Thorpe
                      </p>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md">
                      <MoveUpRight size={17} />
                    </div>
                  </div>
                </div>
              </div>

              {/* floating number */}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO / STORY
      ========================================================== */}
      <section id="story" className="bg-white">
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.6fr_1.4fr] lg:gap-24">
            {/* Label */}
            <div className="self-start">
              <div className="sticky top-28">
                <div className="flex items-center gap-3">
                  <span className="h-[2px] w-8 bg-black/50" />

                  <span className="text-[12px] font-semibold uppercase tracking-[0.3em] text-black/40">
                    The story
                  </span>
                </div>

                <h2 className="mt-6 max-w-[270px] text-2xl font-extrabold leading-[1.05] tracking-[-0.04em]  sm:text-8xl">
                  Josh{" "}
                  <span className="text-[#FF5E1A]">
                    Thorpe
                  </span>
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="max-w-[900px]">
              <p className="text-[clamp(2rem,4vw,4.2rem)] font-medium leading-[1.03] tracking-[-0.055em]">
                With a Masters Degree in Sports &
                Exercise Therapy and a Bachelor’s
                Degree in Sports Science, my goal
                is always the same:
                <span className="text-black/35">
                  {" "}
                  to provide personalised,
                  effective support that meets you
                  where you’re at.
                </span>
              </p>

              <div className="mt-12 grid gap-8 border-t border-black/10 pt-10 sm:grid-cols-2">
                <p className="text-[17px] font-medium leading-8 text-black/55">
                  Whether I’m supporting
                  professional athletes at the top
                  of their game, guiding everyday
                  gym-goers through recovery and
                  performance plans, or working
                  with corporate clients to
                  improve wellbeing and
                  resilience, every approach
                  starts with the individual.
                </p>

                <p className="text-[17px] font-medium leading-8 text-black/55">
                  Fitness has been a lifelong
                  passion of mine, and you’ll
                  usually find me in the gym. That
                  enthusiasm feeds into every
                  session I deliver, creating a
                  space where people feel
                  motivated, understood and
                  empowered to reach their goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CREDENTIALS / EXPERIENCE
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#171717] text-white">
        <div
          aria-hidden="true"
          className="absolute -left-28 top-24 h-72 w-72 rounded-full border border-white/[0.07]"
        />

        <div
          aria-hidden="true"
          className="absolute -right-32 bottom-[-90px] h-96 w-96 rounded-full border border-white/[0.05]"
        />

        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
          {/* Heading */}
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-[2px] w-9 bg-[#FF5E1A]" />
                <span className="text-[12px] font-semibold uppercase tracking-[0.3em] text-white/35">
                  Experience
                </span>
              </div>
            </div>

            <p className="max-w-[430px] text-sm leading-7 text-white/45 lg:pb-1">
              My experience working in sport has
              helped me develop a strong
              understanding of sporting injuries,
              rehabilitation and performance.
            </p>
          </div>

          {/* cards */}
          <div className="mt-16 grid border-t border-white/10 md:grid-cols-3">
            <div className="border-b border-white/10 py-8 md:border-b-0 md:border-r md:py-10 md:pr-8">
              <p className="text-[11px] tracking-[0.22em] text-white/25">
                01
              </p>

              <h3 className="mt-16 text-2xl font-medium tracking-[-0.03em]">
                Professional athletes
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/40">
                Supporting athletes operating at a
                high level with recovery,
                rehabilitation and
                performance-focused guidance.
              </p>
            </div>

            <div className="border-b border-white/10 py-8 md:border-b-0 md:border-r md:px-8 md:py-10">
              <p className="text-[11px] tracking-[0.22em] text-white/25">
                02
              </p>

              <h3 className="mt-16 text-2xl font-medium tracking-[-0.03em]">
                Leeds United Women’s FC
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/40">
                Experience working within sport,
                helping build a practical
                understanding of athlete care and
                rehabilitation.
              </p>
            </div>

            <div className="py-8 md:py-10 md:pl-8">
              <p className="text-[11px] tracking-[0.22em] text-white/25">
                03
              </p>

              <h3 className="mt-16 text-2xl font-medium tracking-[-0.03em]">
                Hunslet RLFC
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/40">
                Further experience within team
                sport and the demands of sporting
                injury management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PERSONAL APPROACH
      ========================================================== */}

      {/* =========================================================
          CLOSING STATEMENT
      ========================================================== */}
      <section className="border-t border-black/10 bg-white">
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="mb-6 flex  items-center h-2  gap-3">
              <span className="h-[2px] w-9 bg-[#FF5E1A]" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.3em] text-black/40">
                Why Josh
              </span>
            </div>

            <div>
              <p className="text-[clamp(2rem,4vw,4.3rem)] font-medium leading-[1.02] tracking-[-0.055em]">
                Whether you’re recovering from
                injury, looking to optimise
                performance, or simply want to
                move better and feel stronger, I’m
                here to help.
              </p>

              <div className="mt-9">
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-3 rounded-full  bg-[#FF5E1A] px-6 py-4 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-[#fa4c02] hover:text-white"
                >
                  See what I offer
                  <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight size={16} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INSTAGRAM
      ========================================================== */}
      <section className="bg-[#171717] text-white">
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          {/* heading */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <FaInstagram
                  size={22}
                  strokeWidth={1.5}
                  className="text-[#FF5E1A]"
                />

                <span className="text-[12px] font-semibold uppercase tracking-[0.3em] text-white/35">
                  Follow me on Instagram
                </span>
              </div>

              <h2 className="max-w-[900px] text-[clamp(3.2rem,7vw,7.2rem)] font-medium leading-[0.84] tracking-[-0.07em]">
                See more of
                <br />
                <span className="text-[#FF5E1A]">
                  what I do.
                </span>
              </h2>
            </div>

            <a
              href="https://www.instagram.com/joshthorpe_fitness/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 self-start rounded-full border border-white/15 px-5 py-3 text-sm text-white/65 transition-all duration-300 hover:border-white/30 hover:bg-white/5 lg:self-auto"
            >
              @joshthorpe_fitness
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>

          <p className="mt-8 max-w-[570px] text-sm leading-7 text-white/40">
            SEE MORE ABOUT ME AND WHAT I DO ON MY
            INSTAGRAM. Physiotherapy, injury
            assessment & prevention, coaching
            plans & more.
          </p>

          {/* instagram grid */}
          <div className="mt-12 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 sm:auto-rows-[260px] lg:grid-cols-3 lg:auto-rows-[310px]">
            {instagramPosts.map((post, index) => (
              <a
                key={post.src}
                href="https://www.instagram.com/joshthorpe_fitness/"
                target="_blank"
                rel="noreferrer"
                className={`group relative overflow-hidden rounded-[24px] ${post.className}`}
              >
                <Image
                  src={post.src}
                  alt={post.alt}
                  fill
                  // sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top transition duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/15 text-xs text-white/80 backdrop-blur-md">
                  0{index + 1}
                </div>

                <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/20 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRight size={16} />
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/25">
              Follow the journey
            </p>

            <a
              href="https://www.instagram.com/joshthorpe_fitness/"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-white/70 transition hover:text-white"
            >
              Instagram ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
