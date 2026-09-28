import React from "react";

const Experience = () => {
  return (
    <>
      <section className="relative isolate  bg-[#f8f8f6] py-16 lg:min-h-88.75 lg:py-0">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div
            className="absolute left-[-4%] bottom-[-72%] h-162.5 w-52.5 rotate-35"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,94,0,0.12), rgba(255,94,0,0.025))",
            }}
          />
          <div
            className="absolute left-[28%] top-[-60%] h-212.5 w-38.75 rotate-34"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.95), rgba(255,94,0,0.10), rgba(255,94,0,0.03))",
            }}
          />

          <div
            className="absolute right-[15%] top-[-85%] h-237.5 w-62.5 rotate-69"
            style={{
              background:
                "linear-gradient(180deg, rgba(210,213,213,0.13), rgba(255,255,255,0.65))",
            }}
          />
          <div
            className="absolute right-[-8%] top-[-40%] h-175 w-36.25 rotate-68"
            style={{
              background:
                "linear-gradient(180deg, rgba(220,220,218,0.15), rgba(255,255,255,0))",
            }}
          />

          <div className="absolute inset-x-0 top-0 h-px bg-black/4" />
        </div>

        <div className="relative mx-auto flex w-full max-w-360 flex-col md:flex-row px-7 sm:px-10 lg:min-h-88.75 lg:flex-row lg:px-16 xl:px-16.25">
          <div className="flex w-full flex-col justify-center py-3 lg:w-[34%] lg:pr-10">
            <div className="mb-2.5 flex items-center gap-3">
              <span className="h-0.75 w-7.75 bg-[#ff5e00]" />

              <span className="text-[13px] font-bold uppercase tracking-[0.13em] text-[#151c22]">
                The Numbers
              </span>
            </div>

            <h2 className="text-[36px] font-extrabold leading-[0.98] tracking-[-0.035em] text-[#111820] sm:text-[34px] lg:text-[35px]">
              Real People.
              <br />
              Real Progress.
            </h2>

            <p className="mt-3 max-w-71.25 text-[16px] font-medium leading-[1.45] text-[#5f6569]">
              Our results speak for themselves.
              Here's what we've achieved together.
            </p>

            <div className="mt-4">
              <a
                href="#results"
                className="group
                    mt-5
                    flex
                    h-11.25
                    w-fit
                    items-center
                    gap-3
                    rounded-full
                    border-[1.5px]
                    border-[#FF8A59]
                    bg-white
                    px-5.25
                    text-[10px]
                    font-bold
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

          <div className="grid w-full grid-cols-2 lg:flex lg:w-[66%]">
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

              <span className="absolute right-0 top-1/2 hidden h-18 w-px -translate-y-1/2 bg-[#c9ccce] lg:block" />
            </div>

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

              <span className="absolute right-0 top-1/2 hidden h-18 w-px -translate-y-1/2 bg-[#c9ccce] lg:block" />
            </div>

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

              <span className="absolute right-0 top-1/2 hidden h-18 w-px -translate-y-1/2 bg-[#c9ccce] lg:block" />
            </div>
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
    </>
  );
};

export default Experience;
