import { ArrowIcon } from "../../funexpo/funexpo";
import { process } from "../../propsdata/props";

const Process = () => {
  return (
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
        lg:h-88.75
        flex items-center justify-center
        "
    >
      <div
        aria-hidden="true"
        className="
      pointer-events-none absolute
      -top-28 left-[38%]
      h-88.75 w-105
      rotate-[8deg]
      bg-[#faf9f7]
      blur-[2px]
    "
      />

      <div
        aria-hidden="true"
        className="
      pointer-events-none absolute
      -right-25 -top-20
      h-88.75 w-[320px]
      rounded-full
      bg-[#fff8f3]
      blur-[80px]
    "
      />

      <div
        className="
      relative z-10
      mx-auto
      flex w-full max-w-345
      flex-col md:flex-row
      lg:flex-row
      lg:items-center
    "
      >
        <div
          className="
        w-full
        pb-9
        sm:pb-10
        md:pb-12
        lg:w-[31%]
        lg:shrink-0
        lg:pb-0
        lg:pr-10.5
        xl:pr-13
      "
        >
          <div
            className="
          mb-3
          flex items-center gap-2.5
        "
          >
            <span
              className="
            h-1
            w-7.75
            shrink-0
            bg-[#FF5E1A]
          "
            />

            <span
              className="
            text-[12px]
            font-bold
            uppercase
            tracking-[0.12em]
            text-[#444]
            sm:text-[13px]
          "
            >
              The Process
            </span>
          </div>

          <h2
            className="
          m-0
          max-w-90
          text-[30px]
          font-extrabold
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

          <p
            className="
          mt-4
          max-w-77.5
          text-[14px]
          font-normal
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
            designed around your goals, lifestyle
            and recovery.
          </p>

          <a
            href="#contact"
            className="
          group
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
          text-[12px]
          font-bold
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
              min-h-55
              px-5
              py-7

              sm:min-h-56.25
              sm:px-6
              sm:py-7

              md:min-h-58.75
              md:px-7

              lg:min-h-0
              lg:h-51.25
              lg:px-6.25
              lg:py-1.75

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
                <div
                  className="
                pointer-events-none
                absolute
                bottom-0 left-0
                h-0 w-0.5
                bg-[#FF5E1A]
                transition-all
                duration-500
                group-hover:h-full
              "
                  aria-hidden="true"
                />

                <div
                  className="
                flex
                items-start
                justify-between
              "
                >
                  <div
                    className="
                  select-none
                  text-[55px]
                  font-extrabold
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
                  <div
                    className="
                  mt-6.75
                  flex
                  h-8.75
                  w-8.75
                  shrink-0
                  items-center
                  justify-center
                  text-[#FF5E1A]
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
                  >
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
                <h3
                  className="
                    mt-3.5
                    text-[12px]
                    font-extrabold
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

                <p
                  className="
                    mt-2.75
                    max-w-55
                    text-[12px]
                    font-normal
                    leading-[1.55]
                    text-[#777]
                    sm:text-[12px]
                    md:text-[13px]
                    lg:text-[13px]
                "
                >
                  {body}
                </p>
                {index < 3 && (
                  <div
                    aria-hidden="true"
                    className="
                    absolute
                    -right-3.5
                    top-1/2
                    z-20
                    hidden
                    -translate-y-1/2
                    lg:flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    bg-white
                    "
                  >
                    <span
                      className="
                    text-[20px]
                    font-light
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
  );
};

export default Process;
