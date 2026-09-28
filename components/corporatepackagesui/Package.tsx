"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  Trophy,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa6";

const services = [
  {
    number: "01",
    title: "Desk Health & Postural Screenings",
    description:
      "Short one-to-one movement assessments with practical interventions designed around desk-based work.",
  },
  {
    number: "02",
    title: "Workshops & Wellness Talks",
    description:
      "Practical sessions covering back and neck pain prevention, desk mobility, nutrition, stress management and breathwork.",
    points: [
      "Preventing Back & Neck Pain",
      "Desk Mobility & Stretching Routines",
      "Nutrition for Focus & Energy",
      "Stress Management & Breathwork",
    ],
  },
  {
    number: "03",
    title: "Ergonomic Audits",
    description:
      "Reviewing workstation setups to help reduce longer-term health issues.",
  },
  {
    number: "04",
    title: "Team Wellness Challenges",
    description:
      "Optional 4–12 week movement and health campaigns created to increase engagement and team morale.",
  },
];

const impactPoints = [
  {
    title: "Frequent Absences",
    text: "MSK issues can contribute significantly to both short- and long-term sickness absence.",
  },
  {
    title: "Reduced Productivity",
    text: "Pain and discomfort can affect concentration and day-to-day work output.",
  },
  {
    title: "Business Costs",
    text: "Employers can face additional costs through cover, lost hours and reduced performance.",
  },
  {
    title: "Employee Wellbeing",
    text: "MSK problems can affect quality of life and overall satisfaction at work.",
  },
];

const challengeSteps = [
  "Teams or individuals earn points each week by completing the challenges.",
  "A weekly or monthly leaderboard can be used alongside small rewards such as healthy snacks or gift cards.",
  "A digital toolkit is provided with videos, PDF guides and habit trackers.",
];

const challengeIncludes = [
  "Kick-off session — virtual or in-person",
  "Weekly check-in emails or videos from Josh",
  "Private leaderboard — optional",
  "End-of-challenge rewards and wrap-up",
];

const reasons = [
  "Evidence-based Physio & Sports therapy",
  "Practical, high-impact delivery",
  "Custom packages to suit team size & budget",
  "Boost productivity, reduce absenteeism",
];

export default function Package() {
  return (
    <main className="w-full overflow-x-clip bg-[#f7f5f1] text-[#282828]">
      <section className="relative min-h-[720px] overflow-hidden bg-[#282828] text-white sm:min-h-[780px]">
        <div className="absolute inset-0">
          <Image
            src="/services-hero.webp"
            alt="Josh Thorpe Fitness corporate health and performance"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-40"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#282828] via-[#282828]/90 to-[#282828]/35" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#282828] via-transparent to-[#282828]/40" />
        </div>

        <div className="pointer-events-none absolute -right-40 top-0 h-[520px] w-[520px] rounded-full bg-[#FF5E1A]/20 blur-[150px]" />

        <div className="pointer-events-none absolute right-[8%] top-0 hidden h-full w-px bg-white/[0.08] lg:block" />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[1%] top-[20%] select-none text-[16vw] font-black uppercase leading-none tracking-[-0.08em] text-white/[0.035]"
        >
          TEAM
        </div>

        <div className="relative mx-auto flex min-h-[720px] w-full max-w-[1440px] flex-col justify-center px-5 pb-16 pt-32 sm:min-h-[780px] sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
          <div className="max-w-[1050px]">
            <div className="mb-7 flex items-center gap-4">
              <span className="h-[2px] w-12 bg-[#FF5E1A]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 sm:text-xs">
                Corporate Health / Performance /
                Wellbeing
              </span>
            </div>

            <h1 className="max-w-[1100px] text-[clamp(50px,8vw,122px)] font-black leading-[1] tracking-[-0.065em]">
              Corporate
              <br />
              <span className="text-[#FF5E1A]">
                performance.
              </span>
            </h1>

            <div className="mt-9 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-[660px] text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
                Corporate health and performance
                services designed to help
                workforces move better, feel
                better and perform at their peak,
                whether they work behind a desk or
                spend their day on their feet.
              </p>

              <Link
                href="#mission"
                className="group flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#FF5E1A] text-white shadow-[0_15px_50px_rgba(255,94,26,0.3)] transition duration-500 hover:scale-105 sm:h-16 sm:w-16"
              >
                <ArrowDownRight
                  size={22}
                  className="transition-transform duration-300 group-hover:translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.62fr_1.38fr] lg:gap-24">
            <div className="self-start">
              <div className="sticky top-[100px]">
                <div className="flex items-center gap-3">
                  <span className="h-[2px] w-8 bg-[#FF5E1A]" />

                  <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-black/40">
                    Our Mission
                  </span>
                </div>

                <p className="mt-6 max-w-[500px] text-[clamp(2rem,4vw,4rem)] font-extrabold leading-[0.95] tracking-[-0.055em] text-[#FF5E1A]">
                  Move better. Feel better.
                  Perform better.
                </p>
              </div>
            </div>
            <div className="max-w-[900px]">
              <p className="text-[clamp(2rem,4vw,4.3rem)] font-medium leading-[1.02] tracking-[-0.055em]">
                We help workforces & teams move
                better, feel better, and perform
                at their peak — whether they’re
                behind a desk or on their feet all
                day.
              </p>

              <div className="mt-10 border-t border-black/10 pt-10">
                <p className="max-w-[820px] text-base leading-8 text-black/55 sm:text-lg">
                  With experience working within
                  corporate health – we have
                  helped hundreds of people get
                  back to work after surgery,
                  injuries or chronic MSK
                  conditions.
                </p>

                <p className="mt-6 max-w-[820px] text-base leading-8 text-black/55 sm:text-lg">
                  More importantly, we have
                  dramatically reduced absences
                  through supporting the workforce
                  appropriately. Addressing MSK
                  health isn't just about injury
                  prevention — it’s about
                  protecting your team’s
                  performance, wellbeing, and your
                  bottom line.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#282828] text-white">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-[2px] w-9 bg-[#FF5E1A]" />

                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/35">
                  The Impact
                </span>
              </div>

              <h2 className="max-w-[850px] text-[clamp(3rem,7vw,7rem)] font-black leading-[0.86] tracking-[-0.07em]">
                The impact of
                <br />
                <span className="text-[#FF5E1A]">
                  MSK conditions.
                </span>
              </h2>
            </div>

            <p className="max-w-[440px] text-sm leading-7 text-white/45 lg:pb-1">
              Musculoskeletal conditions are a
              major contributor to workplace
              absence in the UK.
            </p>
          </div>

          <div className="mt-16 grid gap-8 border-y border-white/10 py-10 sm:grid-cols-[0.8fr_1.2fr] sm:items-center">
            <div>
              <p className="text-[clamp(5rem,11vw,11rem)] font-black leading-none tracking-[-0.08em] text-[#FF5E1A]">
                6.6m
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-white/30">
                working days
              </p>
            </div>

            <p className="max-w-[760px] text-base leading-8 text-white/55 sm:text-lg">
              In 2022/23, around 6.6 million
              working days were lost because of
              MSK disorders, according to the HSE
              figure referenced on the original
              corporate services page.
              :contentReference[oaicite:2]
            </p>
          </div>

          <div className="mt-12 grid border-t border-white/10 md:grid-cols-2 lg:grid-cols-4">
            {impactPoints.map((item, index) => (
              <div
                key={item.title}
                className="border-b border-white/10 px-0 py-8 md:px-7 lg:border-b-0 lg:border-r lg:py-10 first:md:pl-0 last:lg:border-r-0"
              >
                <span className="text-[10px] font-semibold tracking-[0.25em] text-white/25">
                  0{index + 1}
                </span>

                <h3 className="mt-10 text-xl font-bold tracking-[-0.025em]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/40">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#f7f5f1]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#FF5E1A]" />

                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-black/40">
                  Our Services
                </span>
              </div>

              <h2 className="mt-6 max-w-[620px] text-[clamp(3rem,6vw,6.5rem)] font-black leading-[0.86] tracking-[-0.07em]">
                Built for
                <br />
                <span className="text-[#FF5E1A]">
                  your team.
                </span>
              </h2>
            </div>

            <div className="max-w-[620px] lg:justify-self-end">
              <div className="rounded-[28px] bg-white p-7 shadow-[0_25px_70px_rgba(40,40,40,0.06)] sm:p-9">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#FF5E1A]">
                  On-site support
                </p>

                <p className="mt-4 text-xl font-bold leading-tight tracking-[-0.03em]">
                  2x On-Site Physiotherapy &
                  Sports Massage days
                </p>

                <p className="mt-4 text-sm leading-7 text-black/50">
                  30–45 minute sessions focused on
                  reducing tension, improving
                  mobility and helping prevent
                  injury.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-black/10">
            {services.map((service) => (
              <article
                key={service.number}
                className="group border-b border-black/10 py-8 sm:py-10"
              >
                <div className="grid gap-7 lg:grid-cols-[70px_0.8fr_1.2fr] lg:items-start">
                  <span className="text-[11px] font-semibold tracking-[0.25em] text-black/25">
                    {service.number}
                  </span>

                  <h3 className="text-[clamp(1.5rem,2.5vw,2.3rem)] font-bold leading-tight tracking-[-0.035em]">
                    {service.title}
                  </h3>

                  <div>
                    <p className="max-w-[620px] text-sm leading-7 text-black/50 sm:text-base">
                      {service.description}
                    </p>

                    {service.points && (
                      <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {service.points.map(
                          (point) => (
                            <div
                              key={point}
                              className="flex items-center gap-3"
                            >
                              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#282828] text-white">
                                <Check
                                  size={13}
                                />
                              </span>

                              <span className="text-sm text-black/65">
                                {point}
                              </span>
                            </div>
                          ),
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-end">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 transition-all duration-300 group-hover:border-[#FF5E1A] group-hover:bg-[#FF5E1A] group-hover:text-white">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
            <div className="relative">
              <div className="absolute -left-5 top-12 h-32 w-32 rounded-full border border-black/10" />

              <div className="relative rounded-[30px] bg-[#282828] p-7 text-white sm:p-10 lg:p-12">
                <Trophy
                  size={24}
                  strokeWidth={1.6}
                  className="text-[#FF5E1A]"
                />

                <p className="mt-20 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/30">
                  Team Wellness Challenge
                </p>

                <h2 className="mt-5 text-[clamp(2.5rem,5vw,5.2rem)] font-black leading-[0.88] tracking-[-0.065em]">
                  The Movement
                  <br />
                  <span className="text-[#FF5E1A]">
                    Mission.
                  </span>
                </h2>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                    6-Week Team Wellness Challenge
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#FF5E1A]" />

                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-black/40">
                  The Goal
                </span>
              </div>

              <h3 className="mt-6 max-w-[800px] text-[clamp(2.1rem,4vw,4.4rem)] font-medium leading-[1] tracking-[-0.05em]">
                Improve daily movement, reduce
                stiffness and increase team energy
                through enjoyable challenges that
                can be tracked.
              </h3>
              <div className="mt-14">
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#FF5E1A]">
                  How It Works
                </p>

                <div className="mt-5 border-t border-black/10">
                  {challengeSteps.map(
                    (step, index) => (
                      <div
                        key={step}
                        className="flex gap-5 border-b border-black/10 py-5"
                      >
                        <span className="text-[11px] font-bold tracking-[0.2em] text-black/25">
                          0{index + 1}
                        </span>

                        <p className="max-w-[700px] text-sm leading-7 text-black/55">
                          {step}
                        </p>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div className="mt-12">
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#FF5E1A]">
                  What’s Included
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {challengeIncludes.map(
                    (item) => (
                      <div
                        key={item}
                        className="flex gap-3 rounded-[18px] bg-[#f7f5f1] p-4"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white">
                          <Check
                            size={14}
                            className="text-[#FF5E1A]"
                            strokeWidth={2}
                          />
                        </span>

                        <p className="text-sm leading-6 text-black/60">
                          {item}
                        </p>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f5f1]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#FF5E1A]" />

                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-black/40">
                  Why Work With Us?
                </span>
              </div>

              <h2 className="mt-6 max-w-[800px] text-[clamp(3rem,6vw,6.2rem)] font-black leading-[0.87] tracking-[-0.07em]">
                Practical support.
                <br />
                <span className="text-[#FF5E1A]">
                  Real impact.
                </span>
              </h2>
            </div>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason, index) => (
              <div
                key={reason}
                className="group min-h-[240px] rounded-[26px] bg-white p-6 shadow-[0_18px_50px_rgba(40,40,40,0.045)] transition duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-[0.25em] text-black/20">
                    0{index + 1}
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 transition-all duration-300 group-hover:border-[#FF5E1A] group-hover:bg-[#FF5E1A] group-hover:text-white">
                    <ChevronRight size={15} />
                  </span>
                </div>

                <h3 className="mt-20 max-w-[220px] text-xl font-bold leading-tight tracking-[-0.03em]">
                  {reason}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-[#282828] text-white">
        <div className="pointer-events-none absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#FF5E1A]/20 blur-[140px]" />

        <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#FF5E1A]" />

                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/35">
                  Let’s Chat
                </span>
              </div>

              <h2 className="mt-6 max-w-[900px] text-[clamp(3.4rem,7vw,7rem)] font-black leading-[0.84] tracking-[-0.07em]">
                Let’s build
                <br />
                something
                <br />
                <span className="text-[#FF5E1A]">
                  for your team.
                </span>
              </h2>
            </div>

            <div className="lg:justify-self-end">
              <p className="max-w-[430px] text-sm leading-7 text-white/45">
                Corporate health and performance
                enquiries can be made using the
                details below.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href="mailto:jthorpe.sports@gmail.com"
                  className="group flex items-center gap-4"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                    <Mail size={17} />
                  </span>

                  <span className="text-sm text-white/70 transition group-hover:text-white">
                    jthorpe.sports@gmail.com
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="ml-auto text-white/30 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#FF5E1A]"
                  />
                </a>

                <a
                  href="tel:07583275586"
                  className="group flex items-center gap-4"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                    <Phone size={17} />
                  </span>

                  <span className="text-sm text-white/70 transition group-hover:text-white">
                    07583 275586
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="ml-auto text-white/30 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#FF5E1A]"
                  />
                </a>

                <a
                  href="https://www.instagram.com/joshthorpe_fitness/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                    <FaInstagram size={17} />
                  </span>

                  <span className="text-sm text-white/70 transition group-hover:text-white">
                    @joshthorpe_fitness
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="ml-auto text-white/30 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#FF5E1A]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
