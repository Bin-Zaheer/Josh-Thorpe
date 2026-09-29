"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa6";
import { useState } from "react";

export default function Contacts() {
  const [formLoading, setFormLoading] =
    useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formError, setFormError] = useState("");

  const submit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    setFormLoading(true);
    setFormSent(false);
    setFormError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: String(
        formData.get("name") || "",
      ).trim(),
      email: String(
        formData.get("email") || "",
      ).trim(),
      phone: String(
        formData.get("phone") || "",
      ).trim(),
      service: String(
        formData.get("service") || "",
      ).trim(),
      injury: String(
        formData.get("injury") || "",
      ).trim(),
      message: String(
        formData.get("message") || "",
      ).trim(),
    };

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error ||
            "Failed to send enquiry.",
        );
      }

      setFormSent(true);
      form.reset();
    } catch (error) {
      console.error("CONTACT FORM ERROR:", error);

      setFormError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <main className="w-full overflow-x-clip bg-[#f7f5f1] text-[#282828]">
      <section className="relative min-h-[720px] overflow-hidden bg-[#282828] text-white sm:min-h-[780px]">
        <div className="absolute inset-0">
          <Image
            src="/services-hero.webp"
            alt="Josh Thorpe Fitness"
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

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[2%] top-[18%] select-none text-[19vw] font-black uppercase leading-none tracking-[-0.09em] text-white/[0.035]"
        >
          TALK
        </div>

        <div className="relative mx-auto flex min-h-[720px] w-full max-w-[1440px] flex-col justify-center px-5 pb-16 pt-32 sm:min-h-[780px] sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
          <div className="max-w-[1050px]">
            <div className="mb-7 flex items-center gap-4">
              <span className="h-[2px] w-12 bg-[#FF5E1A]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 sm:text-xs">
                Get in touch / Enquiries /
                Bookings
              </span>
            </div>

            <h1 className="max-w-[1000px] text-[clamp(56px,9vw,132px)] font-black leading-[0.82] tracking-[-0.065em]">
              Let’s get
              <br />
              <span className="text-[#FF5E1A]">
                moving.
              </span>
            </h1>

            <div className="mt-9 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-[620px] text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
                Have a question about treatment,
                coaching or your next step? Tell
                me a little about what you need
                and I’ll get back to you as soon
                as possible.
              </p>

              <a
                href="#contact-form"
                className="group flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#FF5E1A] text-white shadow-[0_15px_50px_rgba(255,94,26,0.3)] transition duration-500 hover:scale-105 sm:h-16 sm:w-16"
              >
                <ArrowDownRight
                  size={22}
                  className="transition-transform duration-300 group-hover:translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        id="contact-form"
        className="bg-[#f7f5f1]"
      >
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            <div className="lg:sticky lg:top-[110px] lg:self-start">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#FF5E1A]" />

                <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#282828]/40">
                  Your enquiry
                </span>
              </div>

              <h2 className="mt-6 max-w-[390px] text-[clamp(2.8rem,5vw,5.4rem)] font-black leading-[0.9] tracking-[-0.065em]">
                Tell me
                <br />
                <span className="text-[#FF5E1A]">
                  what you need.
                </span>
              </h2>

              <p className="mt-7 max-w-[390px] text-sm leading-7 text-[#282828]/55 sm:text-base sm:leading-8">
                Fill in the details below and
                include as much information as you
                can. This helps me understand your
                enquiry before getting back to
                you.
              </p>

              <div className="mt-10 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                    <Mail
                      size={17}
                      strokeWidth={1.6}
                    />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#282828]/35">
                      Email
                    </p>

                    <a
                      href="mailto:jthorpe.sports@gmail.com"
                      className="mt-1 block text-sm font-medium transition hover:text-[#FF5E1A]"
                    >
                      jthorpe.sports@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                    <Phone
                      size={17}
                      strokeWidth={1.6}
                    />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#282828]/35">
                      Phone
                    </p>

                    <a
                      href="tel:07583275586"
                      className="mt-1 block text-sm font-medium transition hover:text-[#FF5E1A]"
                    >
                      07583 275 586
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                    <MapPin
                      size={17}
                      strokeWidth={1.6}
                    />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#282828]/35">
                      Find me
                    </p>

                    <p className="mt-1 max-w-[230px] text-sm font-medium leading-6">
                      Ignite Fitness, South Bank,
                      <br />
                      Middlesbrough, TS6 6RS
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://www.instagram.com/joshthorpe_fitness/"
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold"
              >
                <FaInstagram
                  size={17}
                  strokeWidth={1.6}
                />
                @joshthorpe_fitness
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute -inset-4 rounded-[38px] bg-[#FF5E1A]/[0.035] blur-2xl" />

              <form
                onSubmit={submit}
                className="relative rounded-[32px] border border-black/[0.07] bg-white p-6 shadow-[0_25px_80px_rgba(40,40,40,0.07)] sm:p-8 lg:p-10"
              >
                <div className="flex flex-col gap-5 border-b border-black/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#FF5E1A]">
                      Start here
                    </p>

                    <h3 className="mt-2 text-2xl font-bold tracking-[-0.035em] sm:text-3xl">
                      Send an enquiry
                    </h3>
                  </div>

                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#282828]/30">
                      Response
                    </p>

                    <p className="mt-1 text-xs font-medium text-[#282828]/50">
                      I’ll be in touch shortly
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#282828]/45"
                    >
                      Your name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Smith"
                      className="h-14 w-full rounded-[16px] border border-black/10 bg-[#f7f5f1] px-4 text-sm text-[#282828] outline-none transition placeholder:text-black/25 focus:border-[#FF5E1A] focus:bg-white focus:ring-4 focus:ring-[#FF5E1A]/[0.06]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#282828]/45"
                    >
                      Email address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="h-14 w-full rounded-[16px] border border-black/10 bg-[#f7f5f1] px-4 text-sm text-[#282828] outline-none transition placeholder:text-black/25 focus:border-[#FF5E1A] focus:bg-white focus:ring-4 focus:ring-[#FF5E1A]/[0.06]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#282828]/45"
                    >
                      Phone number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="07583 275 586"
                      className="h-14 w-full rounded-[16px] border border-black/10 bg-[#f7f5f1] px-4 text-sm text-[#282828] outline-none transition placeholder:text-black/25 focus:border-[#FF5E1A] focus:bg-white focus:ring-4 focus:ring-[#FF5E1A]/[0.06]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#282828]/45"
                    >
                      What can I help with?
                    </label>

                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        defaultValue=""
                        className="h-14 w-full appearance-none rounded-[16px] border border-black/10 bg-[#f7f5f1] px-4 pr-12 text-sm text-[#282828] outline-none transition focus:border-[#FF5E1A] focus:bg-white focus:ring-4 focus:ring-[#FF5E1A]/[0.06]"
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        <option value="injury-assessment">
                          Injury assessment
                        </option>
                        <option value="sports-massage">
                          Sports massage
                        </option>
                        <option value="coaching">
                          Nutrition / coaching
                          plans
                        </option>
                        <option value="corporate">
                          Corporate client package
                        </option>
                        <option value="other">
                          Other enquiry
                        </option>
                      </select>

                      <ChevronDown
                        size={17}
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#282828]/35"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="injury"
                      className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#282828]/45"
                    >
                      Area of injury
                      <span className="ml-1 font-normal normal-case tracking-normal text-black/25">
                        (if relevant)
                      </span>
                    </label>

                    <div className="relative">
                      <select
                        id="injury"
                        name="injury"
                        defaultValue=""
                        className="h-14 w-full appearance-none rounded-[16px] border border-black/10 bg-[#f7f5f1] px-4 pr-12 text-sm text-[#282828] outline-none transition focus:border-[#FF5E1A] focus:bg-white focus:ring-4 focus:ring-[#FF5E1A]/[0.06]"
                      >
                        <option value="" disabled>
                          Select an area
                        </option>
                        <option value="not-applicable">
                          Not applicable
                        </option>
                        <option value="back">
                          Back
                        </option>
                        <option value="neck">
                          Neck
                        </option>
                        <option value="shoulder">
                          Shoulder
                        </option>
                        <option value="arm">
                          Arm
                        </option>
                        <option value="elbow">
                          Elbow
                        </option>
                        <option value="wrist-hand">
                          Wrist / Hand
                        </option>
                        <option value="hip">
                          Hip
                        </option>
                        <option value="knee">
                          Knee
                        </option>
                        <option value="ankle">
                          Ankle
                        </option>
                        <option value="foot">
                          Foot
                        </option>
                        <option value="other">
                          Other
                        </option>
                      </select>

                      <ChevronDown
                        size={17}
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#282828]/35"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#282828]/45"
                    >
                      Tell me a little more
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Tell me what you'd like help with, your goals, or anything else that's relevant..."
                      className="w-full resize-none rounded-[16px] border border-black/10 bg-[#f7f5f1] px-4 py-4 text-sm leading-7 text-[#282828] outline-none transition placeholder:text-black/25 focus:border-[#FF5E1A] focus:bg-white focus:ring-4 focus:ring-[#FF5E1A]/[0.06]"
                    />
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-5 border-t border-black/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF5E1A]/10">
                      <Check
                        size={13}
                        className="text-[#FF5E1A]"
                        strokeWidth={2.5}
                      />
                    </div>

                    <p className="max-w-[360px] text-xs leading-5 text-[#282828]/40">
                      Please include as much
                      relevant information as
                      possible so I can understand
                      your enquiry.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#FF5E1A] px-7 text-sm font-semibold text-white shadow-[0_15px_45px_rgba(255,94,26,0.22)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(255,94,26,0.3)]"
                  >
                    {" "}
                    {formLoading
                      ? "Sending..."
                      : formSent
                        ? "Enquiry sent"
                        : "Send enquiry"}
                    {!formLoading && (
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
                        <ArrowUpRight size={14} />
                      </span>
                    )}
                  </button>
                </div>
                {formError && (
                  <p className="mt-3 text-sm font-medium text-red-600">
                    {formError}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
