"use client";

import Image from "next/image";
import {
  FormEvent,
  useEffect,
  useMemo,
  useState,
} from "react";

import "swiper/css";
import "swiper/css/pagination";
import Hero from "../components/homeui/Hero";
import About from "../components/homeui/About";
import Services from "../components/homeui/Services";
import Experience from "../components/homeui/Experience";
import Process from "../components/homeui/Process";
import Results from "../components/homeui/Results";
import Testimonials from "../components/homeui/Testimonials";
import Contact from "../components/homeui/Contact";

const ORANGE = "#FF5E1A";

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

  return (
    <main className="site-shell">
      <Hero />

      <About />
      <Services />
      <Experience />

      <Process />
      <Results />
      <Testimonials />
      <Contact />
    </main>
  );
}
