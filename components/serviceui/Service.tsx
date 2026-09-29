import Link from "next/link";
import React from "react";
import {
  faqs,
  services2,
} from "../../propsdata/props";
import Image from "next/image";

const Service = () => {
  return (
    <main className="w-full overflow-hidden bg-[#f7f5f1] text-[#282828]">
      <section className="relative min-h-[720px] overflow-hidden bg-[#282828] text-white sm:min-h-[780px]">
        <div className="absolute inset-0">
          <Image
            src="/services-hero.webp"
            alt="Josh Thorpe Fitness and Injury Clinic"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#282828] via-[#282828]/90 to-[#282828]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#282828] via-transparent to-[#282828]/40" />
        </div>

        <div className="pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-[#FF5E1A]/25 blur-[150px]" />

        <div className="pointer-events-none absolute right-[8%] top-0 hidden h-full w-px bg-white/[0.08] lg:block" />

        <div className="relative mx-auto flex min-h-[720px] w-full max-w-[1440px] flex-col justify-end px-5 pb-16 pt-32 sm:min-h-[780px] sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
          <div className="max-w-[1000px]">
            <div className="mb-7 flex items-center gap-4">
              <span className="h-[2px] w-12 bg-[#FF5E1A]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 sm:text-xs">
                Services / Treatment / Performance
              </span>
            </div>

            <h1 className="max-w-[1000px] text-[clamp(56px,9vw,132px)] font-black leading-[0.82] tracking-[-0.065em]">
              Move better.
              <br />
              <span className="text-[#FF5E1A]">
                Live stronger.
              </span>
            </h1>

            <div className="mt-9 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-[610px] text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
                From sports massage and injury
                rehabilitation to personalised
                coaching and workplace wellbeing,
                every service is designed around
                your body, your goals and your
                progress.
              </p>

              <a
                href="#services"
                className="group flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#FF5E1A] text-white shadow-[0_15px_50px_rgba(255,94,26,0.3)] transition duration-500 hover:scale-105 sm:h-16 sm:w-16"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5 transition-transform duration-500 group-hover:translate-y-1"
                >
                  <path
                    d="M12 4v15M6 13l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 border-t border-white/10 pt-6 sm:grid-cols-4 sm:pt-7">
            {[
              ["05", "Core Services"],
              ["01", "Personal Approach"],
              ["100%", "Built Around You"],
              ["→", "Book Your Session"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="border-white/10 py-3 first:border-l-0 sm:border-l sm:px-6"
              >
                <div className="text-xl font-black text-[#FF5E1A] sm:text-2xl">
                  {number}
                </div>
                <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white/40 sm:text-[10px]">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="relative bg-[#f7f5f1] px-5 py-20 sm:px-8 md:py-28 lg:px-12 lg:py-36"
      >
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#FF5E1A]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF5E1A]">
                  What I Offer
                </span>
              </div>

              <h2 className="text-[clamp(44px,6vw,82px)] font-black leading-[0.88] tracking-[-0.055em]">
                One body.
                <br />
                <span className="text-[#FF5E1A]">
                  Different goals.
                </span>
              </h2>
            </div>

            <div className="lg:pt-8">
              <p className="max-w-[680px] text-[17px] leading-8 text-[#282828]/60 sm:text-[19px] sm:leading-9">
                Your training, recovery and
                physical health are connected.
                That&apos;s why each service is
                designed to work around the
                individual — whether you need
                treatment today, rehabilitation
                after an injury or a smarter
                approach to long-term performance.
              </p>

              <div className="mt-9 flex flex-wrap gap-2">
                {services2.map((service) => (
                  <a
                    key={service.number}
                    href={`#service-${service.number}`}
                    className="rounded-full border border-[#282828]/10 bg-white px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.12em] transition duration-300 hover:border-[#FF5E1A] hover:bg-[#FF5E1A] hover:text-white"
                  >
                    {service.title}{" "}
                    {service.accent}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {services2.map((service, index) => {
        const dark = index === 0 || index === 3;

        return (
          <section
            id={`service-${service.number}`}
            key={service.number}
            className={`relative overflow-hidden ${
              dark
                ? "bg-[#282828] text-white"
                : "bg-white text-[#282828]"
            }`}
          >
            <div
              className={`pointer-events-none absolute h-[500px] w-[500px] rounded-full bg-[#FF5E1A]/10 blur-[120px] ${
                index % 2 === 0
                  ? "-left-56 top-1/4"
                  : "-right-56 bottom-1/4"
              }`}
            />

            <div className="relative mx-auto w-full max-w-[1440px] px-5 py-20 sm:px-8 md:py-28 lg:px-12 lg:py-36">
              <div
                className={`grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-24 ${
                  index % 2 !== 0
                    ? "lg:[&>div:first-child]:order-2"
                    : ""
                }`}
              >
                <div className="group relative">
                  <div
                    className={`absolute ${
                      index % 2 === 0
                        ? "-left-3 -top-3 sm:-left-4 sm:-top-4"
                        : "-bottom-3 -right-3 sm:-bottom-4 sm:-right-4"
                    } h-[92%] w-[92%] rounded-[28px] bg-[#FF5E1A] opacity-80 transition duration-700 group-hover:opacity-100 sm:rounded-[38px]`}
                  />

                  <div className="relative aspect-[4/4.5] overflow-hidden rounded-[28px] bg-[#282828] sm:rounded-[38px]">
                    <Image
                      src={service.image}
                      alt={
                        service.title +
                        " " +
                        service.accent
                      }
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition duration-1000 ease-out group-hover:scale-105"
                    />

                    <div
                      className={`absolute inset-0 ${
                        dark
                          ? "bg-gradient-to-t from-black/65 via-transparent to-black/10"
                          : "bg-gradient-to-t from-black/55 via-transparent to-black/5"
                      }`}
                    />

                    <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF5E1A] text-sm font-black text-white shadow-[0_10px_35px_rgba(255,94,26,0.3)] sm:h-14 sm:w-14">
                        {service.number}
                      </span>
                    </div>

                    <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
                      <div className="flex items-end justify-between">
                        <span className="max-w-[220px] text-[10px] font-bold uppercase leading-5 tracking-[0.2em] text-white/70">
                          {service.eyebrow}
                        </span>

                        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition duration-500 group-hover:rotate-45 sm:h-12 sm:w-12">
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mb-7 flex items-center gap-4">
                    <span className="text-sm font-black tracking-[0.18em] text-[#FF5E1A]">
                      {service.number}
                    </span>
                    <span
                      className={`h-px w-12 ${
                        dark
                          ? "bg-white/20"
                          : "bg-[#282828]/15"
                      }`}
                    />
                    <span
                      className={`text-[9px] font-bold uppercase tracking-[0.25em] ${
                        dark
                          ? "text-white/35"
                          : "text-[#282828]/35"
                      }`}
                    >
                      {service.eyebrow}
                    </span>
                  </div>

                  <h2 className="text-[clamp(42px,5.5vw,76px)] font-black leading-[1] tracking-[-0.055em]">
                    {service.title}
                    <br />
                    <span className="text-[#FF5E1A]">
                      {service.accent}
                    </span>
                  </h2>

                  <p
                    className={`mt-7 max-w-[590px] text-[16px] leading-8 sm:text-[18px] sm:leading-9 ${
                      dark
                        ? "text-white/55"
                        : "text-[#282828]/55"
                    }`}
                  >
                    {service.description}
                  </p>

                  <div
                    className={`mt-9 grid grid-cols-1 border-y py-2 sm:grid-cols-2 ${
                      dark
                        ? "border-white/10"
                        : "border-[#282828]/10"
                    }`}
                  >
                    {services2[0].points.map(
                      (point, index) => (
                        <div
                          key={point}
                          className={`flex items-center gap-3 border-b py-4 last:border-b-0 sm:nth-[2n]:border-b-0 ${
                            dark
                              ? "border-white/10"
                              : "border-[#282828]/10"
                          }`}
                        >
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FF5E1A] text-[9px] font-black text-white">
                            ✓
                          </span>
                          <span
                            className={`text-[11px] font-bold uppercase tracking-[0.06em] ${
                              dark
                                ? "text-white/60"
                                : "text-[#282828]/60"
                            }`}
                          >
                            {point}
                          </span>
                        </div>
                      ),
                    )}
                  </div>

                  <div className="mt-9">
                    <Link
                      href={
                        index == 4
                          ? "/corporate-packages"
                          : "book-now"
                      }
                      className={`group inline-flex w-full items-center justify-between rounded-full px-6 py-4 text-[11px] font-bold uppercase tracking-[0.14em] transition duration-300 sm:w-auto sm:min-w-[220px] ${
                        dark
                          ? "bg-[#FF5E1A] text-white hover:bg-[#f7510a] hover:text-[#282828]"
                          : "bg-[#FF5E1A] text-white "
                      }`}
                    >
                      {index == 4
                        ? "More Information"
                        : "Book This Service"}
                      <span className="ml-6 transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section
        id="invest"
        className="bg-white px-5 py-20 sm:px-8 md:py-28 lg:px-12 lg:py-36 border-t border-[#858585]/40"
      >
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#FF5E1A]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF5E1A]">
                  Investment
                </span>
              </div>

              <h2 className="text-[clamp(46px,6vw,82px)] font-black leading-[0.88] tracking-[-0.055em]">
                Straightforward
                <br />
                <span className="text-[#FF5E1A]">
                  pricing.
                </span>
              </h2>

              <p className="mt-7 max-w-[430px] text-[16px] leading-8 text-[#282828]/55">
                Clear options with no unnecessary
                complication. Choose the session
                that fits your current needs.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                [
                  "Initial Appointment",
                  "£60",
                  "60 minute session",
                  "Full assessment & treatment",
                ],
                [
                  "Treatment Session",
                  "£45",
                  "60 minute session",
                  "Targeted treatment",
                ],
                [
                  "Block of 4",
                  "£135",
                  "4 sessions",
                  "Save with a treatment block",
                ],
                [
                  "30 Min Session",
                  "£30",
                  "30 minute session",
                  "Focused treatment",
                ],
              ].map(
                (
                  [
                    title,
                    price,
                    duration,
                    detail,
                  ],
                  index,
                ) => (
                  <div
                    key={title}
                    className={`group relative overflow-hidden rounded-[24px] border p-6 transition duration-500 hover:-translate-y-1 sm:p-7 ${
                      index === 0
                        ? "border-[#FF5E1A] bg-[#FF5E1A] text-white"
                        : "border-[#282828]/10 bg-[#f7f5f1]"
                    }`}
                  >
                    {index === 0 && (
                      <span className="absolute right-5 top-5 rounded-full bg-white/15 px-3 py-1 text-[8px] font-bold uppercase tracking-[0.15em]">
                        Start Here
                      </span>
                    )}

                    <p
                      className={`text-[10px] font-bold uppercase tracking-[0.2em] ${
                        index === 0
                          ? "text-white/60"
                          : "text-[#282828]/35"
                      }`}
                    >
                      {duration}
                    </p>

                    <h3 className="mt-8 text-lg font-black">
                      {title}
                    </h3>

                    <div className="mt-3 text-4xl font-black tracking-[-0.04em]">
                      {price}
                    </div>

                    <p
                      className={`mt-2 text-sm ${
                        index === 0
                          ? "text-white/60"
                          : "text-[#282828]/45"
                      }`}
                    >
                      {detail}
                    </p>

                    <Link
                      href="#contact"
                      className={`mt-7 inline-flex items-center text-[10px] font-bold uppercase tracking-[0.15em] ${
                        index === 0
                          ? "text-white"
                          : "text-[#FF5E1A]"
                      }`}
                    >
                      Book Now
                      <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                ),
              )}

              <div className="group relative overflow-hidden rounded-[24px] bg-[#282828] p-6 text-white sm:col-span-2 sm:p-7">
                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#FF5E1A]/25 blur-[70px]" />

                <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF5E1A]">
                      Corporate
                    </p>
                    <h3 className="mt-3 text-2xl font-black">
                      Corporate Packages
                    </h3>
                    <p className="mt-2 max-w-[500px] text-sm leading-6 text-white/45">
                      Tailored packages for teams
                      and workforces.
                    </p>
                  </div>

                  <Link
                    href="/book-now"
                    className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#FF5E1A] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#fc5108] hover:text-[#282828]"
                  >
                    Enquire →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f5f1] px-5 py-20 sm:px-8 md:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto w-full max-w-[1100px]">
          <div className="text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-[2px] w-10 bg-[#FF5E1A]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF5E1A]">
                Before You Book
              </span>
              <span className="h-[2px] w-10 bg-[#FF5E1A]" />
            </div>

            <h2 className="text-[clamp(45px,6vw,76px)] font-black leading-[0.9] tracking-[-0.055em]">
              Questions?
            </h2>
          </div>

          <div className="mt-14 overflow-hidden rounded-[28px] border border-[#282828]/10 bg-white">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group border-b border-[#282828]/10 last:border-b-0"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-6 text-sm font-bold transition hover:text-[#FF5E1A] sm:px-7 sm:py-7">
                  <span className="flex min-w-0 items-start">
                    <span className="mr-4 w-[18px] shrink-0 pt-[2px] text-[10px] font-black text-[#FF5E1A]/60">
                      0{index + 1}
                    </span>

                    <span className="min-w-0">
                      {faq.question}
                    </span>
                  </span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f7f5f1] text-lg transition duration-300 group-open:rotate-45 group-open:bg-[#FF5E1A] group-open:text-white">
                    +
                  </span>
                </summary>

                <div className="px-5 pb-6 pl-[52px] sm:px-7 sm:pb-7 sm:pl-[68px]">
                  <p className="max-w-[650px] text-sm leading-7 text-[#282828]/50">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Service;
