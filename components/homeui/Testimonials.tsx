"use client";
import React, {
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  ArrowIcon,
  ChevronIcon,
  SectionLabel,
} from "../../funexpo/funexpo";
import { testimonials } from "../../propsdata/props";
import Link from "next/link";

const Testimonials = () => {
  const [testimonial, setTestimonial] =
    useState(0);
  const current = useMemo(
    () => testimonials[testimonial],
    [testimonial],
  );

  useEffect(() => {
    const timer = window.setInterval(
      () =>
        setTestimonial(
          (value) =>
            (value + 1) % testimonials.length,
        ),
      5200,
    );
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="light-section testimonials-section section-pad">
      <div
        className="testimonial-glow"
        aria-hidden
      />
      <div className="container-jtf">
        <div className="testimonial-head reveal">
          <div className="pl-4 lg:pl-0">
            <SectionLabel>
              Testimonials
            </SectionLabel>
            <h2>
              Real Stories.
              <br />
              <span>Lasting Impact.</span>
            </h2>
          </div>
          <div className="slider-controls">
            <button
              onClick={() =>
                setTestimonial(
                  (value) =>
                    (value -
                      1 +
                      testimonials.length) %
                    testimonials.length,
                )
              }
              aria-label="Previous testimonial"
            >
              <ChevronIcon left />
            </button>
            <span>
              0{testimonial + 1} <em>/ 03</em>
            </span>
            <button
              onClick={() =>
                setTestimonial(
                  (value) =>
                    (value + 1) %
                    testimonials.length,
                )
              }
              aria-label="Next testimonial"
            >
              <ChevronIcon />
            </button>
          </div>
        </div>
        <div className="testimonial-stage reveal">
          <div className="testimonial-avatar">
            <span>
              {current.name
                .split(" ")
                .map((part) => part[0])
                .join("")}
            </span>
          </div>
          <div className="testimonial-quote">
            “
          </div>
          <blockquote>{current.quote}</blockquote>
          <div className="testimonial-meta">
            <strong>{current.name}</strong>
            <span>{current.meta}</span>
          </div>
          <div className="testimonial-stars">
            ★★★★★
          </div>
          <div
            className="testimonial-dots"
            role="tablist"
            aria-label="Testimonials"
          >
            {testimonials.map((item, index) => (
              <button
                role="tab"
                aria-selected={
                  testimonial === index
                }
                aria-label={`Testimonial ${index + 1}`}
                key={item.name}
                className={
                  testimonial === index
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setTestimonial(index)
                }
              />
            ))}
          </div>
        </div>

        <div className="josh-story">
          <div className="josh-photo-wrap reveal">
            <div
              className="josh-orange-block"
              aria-hidden
            />
            <img
              src={"/josh.webp"}
              alt="Josh Thorpe, founder and coach"
              className="josh-photo"
            />
          </div>
          <div className="josh-copy reveal pl-4 lg:pl-0">
            <SectionLabel>
              Meet Josh Thorpe
            </SectionLabel>
            <h2>
              Your Coach.
              <br />
              <span>Your Support.</span>
              <br />
              Your Results.
            </h2>
            <p>
              Josh brings together sports therapy,
              rehabilitation and performance
              coaching with a personal approach
              that keeps every programme grounded
              in what matters to you.
            </p>
            <div className="josh-tags">
              <span>SPORTS THERAPY</span>
              <span>REHABILITATION</span>
              <span>PERFORMANCE</span>
            </div>
            <Link
              href="/about"
              className="outline-button"
            >
              Meet Josh <ArrowIcon />
            </Link>
          </div>
          <div
            className={`h-60 w-60 bg-center bg-no-repeat bg-cover lg:flex hidden`}
            style={{
              backgroundImage:
                "url('/sign.webp')",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
