import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full  bg-[#fafafa] overflow-hidden py-24 flex items-center font-sans"
    >
      <div className=" z-10 w-full max-w-[1640px] mx-auto px-5 sm:px-12 lg:pl-16 lg:pr-0 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 flex items-center relative w-full">
          <div
            style={{
              backgroundImage:
                "url('/about1.webp')",
            }}
            className="w-full bg-contain h-87.5 md:h-137.5 rounded-2xl bg-size[100%_auto] md:bg-cover bg-center bg-no-repeat"
          ></div>
        </div>

        <div className="lg:col-span-4 flex flex-col justify-center px-4 text-left lg:px-4 mt-8 lg:mt-0">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-7 h-0.75 bg-[#ff5500]" />
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#ff5500]">
              ABOUT JOSH THORPE FITNESS & INJURY
              CLINIC
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black tracking-wide text-[#1a1d24] leading-[1.08] mb-6">
            Expert Care.
            <br />
            <span className="text-[#ff5500]">
              Real Results.
            </span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 font-medium">
            At Josh Thorpe Fitness & Injury
            Clinic, we combine advanced
            assessment, hands-on therapy and
            personalised training to help you
            recover, move better and reach your
            goals — without the pain.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 sm:gap-2 lg:gap-4 mb-10 w-full">
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

          <div className="flex">
            <a
              href="#services"
              className="group gap-3 border-2 border-[#ff5500] hover:border-[#ff5500] text-[#ff5500] hover:text-[#ffffff] hover:bg-[#ff5500] px-7 py-2 text-[15px] font-bold rounded-full transition-all duration-300 flex justify-center items-center"
            >
              <span className="text-[#ff5500] group-hover:text-[#ffffff] transition-colors duration-300 ">
                Learn More
              </span>
              <span className="text-[20px] font-bold text-[#ff5500] group-hover:text-[#ffffff] transition-colors duration-300 ">
                →
              </span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-3 hidden lg:flex items-center h-full justify-end relative pr-6">
          <div
            style={{
              backgroundImage:
                "url('/about2.webp')",
            }}
            className="w-full h-137.5 bg-center bg-no-repeat bg-contain "
          ></div>
        </div>
      </div>
    </section>
  );
};

export default About;
