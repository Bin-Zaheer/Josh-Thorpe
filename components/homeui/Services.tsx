"use client";
import React, {
  useEffect,
  useState,
} from "react";
import {
  ArrowIcon,
  SectionLabel,
} from "../../funexpo/funexpo";
import { services } from "../../propsdata/props";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  const [serviceIndex, setServiceIndex] =
    useState(0);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

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

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-black/80  py-24 sm:py-28 lg:py-36 bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url('/services.webp')",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-20 h-105 w-105 rounded-full bg-white/2.5 blur-[120px]"
      />

      <div className="container-jtf relative mx-auto">
        <div className="flex flex-col gap-14 md:flex-row md:items-center md:gap-10 lg:gap-16 xl:gap-24">
          <div className="w-full min-w-0 pl-3 md:w-[38%] lg:w-[35%]">
            <div className="reveal">
              <SectionLabel light>
                Our Services
              </SectionLabel>
            </div>

            <div className="mt-5 ">
              <h2 className="max-w-130 text-[clamp(2.5rem,4vw,4.7rem)] font-bold leading-[0.98] tracking-[-0.055em] text-white">
                Comprehensive Care.
                <br />
                <span className="text-[#ff5500]">
                  Tailored to You.
                </span>
              </h2>
            </div>
            <p className="mt-7 max-w-117.5 text-[15px] leading-7 text-white/55 sm:text-base">
              From injury recovery to peak
              performance, every service is built
              around your body, goals and
              lifestyle.
            </p>
            <div className="flex mt-5">
              <Link
                href="/services"
                className="group gap-3 border-2 border-[#ff5500] hover:border-[#ff5500] text-[#ff5500] hover:text-[#ffffff] hover:bg-[#ff5500] px-7 py-2 text-[15px] font-bold rounded-full transition-all duration-300 flex justify-center items-center"
              >
                <span className="text-[#ff5500] group-hover:text-[#ffffff] transition-colors duration-300 ">
                  More Services
                </span>
                <span className="text-[20px] font-bold text-[#ff5500] group-hover:text-[#ffffff] transition-colors duration-300 ">
                  →
                </span>
              </Link>
            </div>

            <a
              href=""
              className=" flex items-center gap-3 border-b border-white/20 pb-2 text-sm font-medium text-white transition-all duration-500 hover:border-white/70"
            >
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
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/2.5 text-white/60 backdrop-blur-md transition-all duration-500 hover:border-white/40 hover:bg-white/[0.07] hover:text-white"
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
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/2.5 text-white/60 backdrop-blur-md transition-all duration-500 hover:border-white/40 hover:bg-white/[0.07] hover:text-white"
              >
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </button>
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
                    className={`h-0.5 transition-all duration-500 ${
                      index === serviceIndex
                        ? "w-8 bg-white"
                        : "w-3 bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="w-full min-w-0 md:w-[62%] lg:w-[65%]">
            <div className="relative w-full min-w-0 overflow-hidden">
              <div
                className="flex gap-5 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:gap-6"
                style={{
                  transform: isMobile
                    ? `translateX(calc(-${serviceIndex * 100}% - ${serviceIndex * 20}px))`
                    : `translateX(calc(-${serviceIndex * 50}% - ${serviceIndex * 12}px))`,
                }}
              >
                {services.map(
                  (service, index) => (
                    <article
                      key={service.title}
                      className="group relative min-w-0 shrink-0 basis-full sm:basis-[calc(50%-12px)]"
                    >
                      <div className="relative h-110 overflow-hidden rounded-xs bg-[#1a1a1a] sm:h-125 lg:h-140">
                        <Image
                          src={service.image}
                          fill
                          alt={`${service.title} session`}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.045]"
                        />

                        <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/5 to-black/80" />

                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/75 to-transparent" />

                        <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/10 text-[11px] tracking-[0.15em] text-white backdrop-blur-md">
                          {String(
                            index + 1,
                          ).padStart(2, "0")}
                        </div>

                        <div className="absolute left-5 right-5 top-5 h-px bg-linear-to-r from-white/50 via-white/10 to-transparent" />

                        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 lg:p-8">
                          <div className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-white/50">
                            {service.kicker}
                          </div>

                          <h3 className="max-w-[320px] text-[clamp(1.65rem,2.5vw,2.6rem)] font-medium leading-[1.05] tracking-[-0.035em] text-white">
                            {service.title}
                          </h3>

                          <p className="mt-4 max-w-90 text-sm leading-6 text-white/65">
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

              <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-linear-to-r from-[#111111] to-transparent"
              />

              <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-linear-to-l from-[#111111] to-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
