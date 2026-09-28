import Image from "next/image";
import React from "react";
import {
  ArrowIcon,
  SectionLabel,
} from "../../funexpo/funexpo";

const Results = () => {
  return (
    <section
      id="results"
      className="results-section bg-contain bg-center bg-no-repeat relative overflow-hidden"
      style={{
        backgroundImage: "url('/results.webp')",
      }}
    >
      <div className="" aria-hidden>
        <div className="results-overlay" />
        <div className="results-orange results-orange--a" />
        <div className=" absolute right-0 bottom-0 bg-orange-600 w-110 h-60 rotate-125 translate-x-70 translate-y-10" />
        <div className="results-orange results-orange--b" />
        <div className="results-orange results-orange--c" />
      </div>
      <div className="container-jtf results-layout">
        <div className="results-copy reveal pl-4 lg:pl-4">
          <SectionLabel light>
            Real Results
          </SectionLabel>
          <h2 className="font-bold">
            From Pain to
            <br />
            <span>Performance.</span>
          </h2>
          <p className="text-[15px]">
            See how personalised programmes
            support recovery, rebuild confidence
            and keep people moving forward.
          </p>
          <a
            className="orange-button"
            href="#contact"
          >
            View More Transformations{" "}
            <ArrowIcon />
          </a>
        </div>
        <div className="results-collage reveal">
          <div className="results-card results-card--large">
            <Image
              src={"/before.webp"}
              fill
              alt="Knee rehabilitation and movement support"
            />
            <span className="border-b-2 border-[ffffff2e] w-20 pb-1">
              BEFORE
            </span>
          </div>
          <div className="results-card results-card--small">
            <Image
              src={"/after.webp"}
              fill
              alt="Personal coaching and movement training"
            />
            <span className="border-b-2 border-orange-600 w-20 pb-1">
              AFTER
            </span>
          </div>
          <div className="results-stat-stack pl-4 lg:pl-4">
            <div>
              <strong>92%</strong>
              <span>LESS PAIN</span>
            </div>
            <div>
              <strong>87%</strong>
              <span>IMPROVED MOBILITY</span>
            </div>
            <div>
              <strong>78%</strong>
              <span>INCREASED STRENGTH</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
