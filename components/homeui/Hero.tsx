import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative isolate min-h-0 overflow-hidden bg-[#111] text-white lg:min-h-170"
      >
        <div className="absolute inset-0 -z-30 overflow-hidden">
          <Image
            src="/banner1.webp"
            fill
            alt="Josh Thorpe Fitness and Injury Clinic"
            className="
            h-full w-full
            object-cover md:object-center object-[70%_50%]
            md:translate-x-0
            translate-x-0
    "
          />
        </div>

        <div
          className="absolute inset-y-0 left-0 -z-10 w-[65%]"
          style={{
            background:
              "linear-gradient(90deg, rgba(5,5,5,0.50) 0%, rgba(5,5,5,0.72) 0%, rgba(5,5,5,0.30) 0%, transparent 10%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 -z-10 h-[45%]"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.22), rgba(0,0,0,0.18), transparent)",
          }}
        />
        <div
          className="
            absolute inset-x-0 top-0 -z-10
            h-150 md:h-32
            bg-[linear-gradient(to_bottom,rgba(0,0,0,0.55)_100%,rgba(0,0,0,0.94)_100%,transparent_100%)]
            md:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.25),transparent)]
             "
        />
        <div
          className="absolute inset-y-0 right-0 -z-10 w-[35%]"
          style={{
            background:
              "linear-gradient(270deg, rgba(0,0,0,0.12), transparent)",
          }}
        />
        <div className="relative mx-auto flex min-h-0 w-full max-w-362.5 items-center px-6 py-20 sm:px-10 sm:py-24 lg:min-h-170 lg:px-16 xl:px-20">
          <div className="relative z-10 max-w-155">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-0.75 lg:w-8 w-5 bg-[#ff5e00]" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/90 sm:text-xs">
                Josh Thorpe Fitness & Injury
                Clinic
              </span>
            </div>

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
            <p className="mt-7 max-w-110 text-[12px] font-medium leading-[1.55] text-white/75 sm:text-[15px]">
              Expert-led fitness, rehab and injury
              recovery programmes to help you move
              better, perform higher and live
              pain-free.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-7">
              <Link
                href="/book-now"
                className="group inline-flex h-13 items-center gap-5 rounded-full bg-[#ff5e00] lg:px-7  px-4 lg:text-[13px] text-[11px] font-bold uppercase  text-white shadow-[0_10px_35px_rgba(255,94,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff6a12] hover:shadow-[0_14px_45px_rgba(255,94,0,0.38)]"
              >
                <span>
                  Book Your Consultation
                </span>

                <span className="flex h-7 w-7 items-center justify-center rounded-full  transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <a
                href="https://www.instagram.com/joshthorpe_fitness/"
                className="group flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-white transition-opacity duration-300 hover:opacity-80"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/80 transition-all duration-300 group-hover:border-[#ff5e00] group-hover:bg-[#ff5e00]">
                  <span className="ml-0.5 text-[10px]">
                    ▶
                  </span>
                </span>

                <span>Watch Our Story</span>
              </a>
            </div>
          </div>

          <div className="absolute right-6 top-1/  hidden -translate-y-1/2 lg:block xl:right-14">
            <div className="flex flex-col gap-7">
              <div className="flex items-center gap-4">
                <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full border border-[#ff5e00] bg-black/30 shadow-[0_0_20px_rgba(255,94,0,0.08)] backdrop-blur-sm">
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
              <div className="flex items-center gap-4">
                <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full border border-[#ff5e00] bg-black/30 shadow-[0_0_20px_rgba(255,94,0,0.08)] backdrop-blur-sm">
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

              <div className="flex items-center gap-4">
                <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full border border-[#ff5e00] bg-black/30 shadow-[0_0_20px_rgba(255,94,0,0.08)] backdrop-blur-sm">
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

          <div className="absolute bottom-7 left-6 lg:flex hidden items-center gap-3 sm:left-10 lg:left-16">
            <div className="flex h-9 w-6 items-start justify-center rounded-full border border-white/70 pt-1.5">
              <span className="h-2 w-0.5 rounded-full bg-white/90" />
            </div>

            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/65">
              Scroll to explore
            </span>
          </div>
        </div>
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.45), transparent)",
          }}
        />
      </section>
      <div className="relative w-full overflow-hidden bg-[#ff5e00] py-3 sm:py-2.5">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-linear-to-b from-white/10 via-transparent to-black/8"
        />

        <div className="relative w-full overflow-hidden">
          <div className="flex w-max shrink-0 animate-[jtfMarquee_24s_linear_infinite]">
            <div className="flex shrink-0 items-center gap-7 pr-7 sm:gap-9 sm:pr-9">
              <span className="whitespace-nowrap text-[10px] font-black uppercase tracking-[0.22em] text-white sm:text-[11px]">
                RECOVER
              </span>

              <span className="h-1 w-1 shrink-0 rounded-full bg-white/80" />

              <span className="whitespace-nowrap text-[10px] font-black uppercase tracking-[0.22em] text-white sm:text-[11px]">
                REBUILD
              </span>

              <span className="h-1 w-1 shrink-0 rounded-full bg-white/80" />

              <span className="whitespace-nowrap text-[10px] font-black uppercase tracking-[0.22em] text-white sm:text-[11px]">
                PERFORM
              </span>

              <span className="h-1 w-1 shrink-0 rounded-full bg-white/80" />

              <span className="whitespace-nowrap text-[10px] font-black uppercase tracking-[0.22em] text-white sm:text-[11px]">
                MOVE BETTER
              </span>

              <span className="h-1 w-1 shrink-0 rounded-full bg-white/80" />
            </div>

            <div
              aria-hidden="true"
              className="flex shrink-0 items-center gap-7 pr-7 sm:gap-9 sm:pr-9"
            >
              <span className="whitespace-nowrap text-[10px] font-black uppercase tracking-[0.22em] text-white sm:text-[11px]">
                RECOVER
              </span>

              <span className="h-1 w-1 shrink-0 rounded-full bg-white/80" />

              <span className="whitespace-nowrap text-[10px] font-black uppercase tracking-[0.22em] text-white sm:text-[11px]">
                REBUILD
              </span>

              <span className="h-1 w-1 shrink-0 rounded-full bg-white/80" />

              <span className="whitespace-nowrap text-[10px] font-black uppercase tracking-[0.22em] text-white sm:text-[11px]">
                PERFORM
              </span>

              <span className="h-1 w-1 shrink-0 rounded-full bg-white/80" />

              <span className="whitespace-nowrap text-[10px] font-black uppercase tracking-[0.22em] text-white sm:text-[11px]">
                MOVE BETTER
              </span>

              <span className="h-1 w-1 shrink-0 rounded-full bg-white/80" />
            </div>

            <div
              aria-hidden="true"
              className="flex shrink-0 items-center gap-7 pr-7 sm:gap-9 sm:pr-9"
            >
              <span className="whitespace-nowrap text-[10px] font-black uppercase tracking-[0.22em] text-white sm:text-[11px]">
                RECOVER
              </span>

              <span className="h-1 w-1 shrink-0 rounded-full bg-white/80" />

              <span className="whitespace-nowrap text-[10px] font-black uppercase tracking-[0.22em] text-white sm:text-[11px]">
                REBUILD
              </span>

              <span className="h-1 w-1 shrink-0 rounded-full bg-white/80" />

              <span className="whitespace-nowrap text-[10px] font-black uppercase tracking-[0.22em] text-white sm:text-[11px]">
                PERFORM
              </span>

              <span className="h-1 w-1 shrink-0 rounded-full bg-white/80" />

              <span className="whitespace-nowrap text-[10px] font-black uppercase tracking-[0.22em] text-white sm:text-[11px]">
                MOVE BETTER
              </span>

              <span className="h-1 w-1 shrink-0 rounded-full bg-white/80" />
            </div>

            {/* GROUP 4 */}
            <div
              aria-hidden="true"
              className="flex shrink-0 items-center gap-7 pr-7 sm:gap-9 sm:pr-9"
            >
              <span className="whitespace-nowrap text-[10px] font-black uppercase tracking-[0.22em] text-white sm:text-[11px]">
                RECOVER
              </span>

              <span className="h-1 w-1 shrink-0 rounded-full bg-white/80" />

              <span className="whitespace-nowrap text-[10px] font-black uppercase tracking-[0.22em] text-white sm:text-[11px]">
                REBUILD
              </span>

              <span className="h-1 w-1 shrink-0 rounded-full bg-white/80" />

              <span className="whitespace-nowrap text-[10px] font-black uppercase tracking-[0.22em] text-white sm:text-[11px]">
                PERFORM
              </span>

              <span className="h-1 w-1 shrink-0 rounded-full bg-white/80" />

              <span className="whitespace-nowrap text-[10px] font-black uppercase tracking-[0.22em] text-white sm:text-[11px]">
                MOVE BETTER
              </span>

              <span className="h-1 w-1 shrink-0 rounded-full bg-white/80" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
