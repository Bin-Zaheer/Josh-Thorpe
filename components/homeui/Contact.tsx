"use client";
import { useState, FormEvent } from "react";
import {
  ArrowIcon,
  SectionLabel,
} from "../../funexpo/funexpo";
import Image from "next/image";

const Contact = () => {
  const [formSent, setFormSent] = useState(false);
  const submit = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    setFormSent(true);
  };

  return (
    <section
      id="contact"
      className="booking-section"
    >
      <div className="booking-bg" aria-hidden>
        <Image src={"/footer.webp"} alt="" fill />
        <div className="booking-overlay" />
        <div className="booking-orange" />
      </div>
      <div className="container-jtf booking-layout">
        <div className="booking-copy reveal ">
          <SectionLabel light>
            Book Your Consultation
          </SectionLabel>
          <h2 className="font-bold">
            Take the First Step
            <br />
            Toward a <span>Stronger You.</span>
          </h2>
          <p>
            Your goals. Our expertise. Real
            support from assessment through
            recovery, training and performance.
          </p>
          <div className="booking-contact-row">
            <a
              href="#contact"
              className="outline-button"
            >
              Meet Josh <ArrowIcon />
            </a>
          </div>
        </div>
        <form
          className="booking-form reveal"
          onSubmit={submit}
        >
          <div className="booking-form-head">
            <span>GET STARTED</span>
            <strong>
              Tell us what you need.
            </strong>
          </div>
          <div className="form-grid">
            <label>
              Full Name
              <input
                required
                name="name"
                placeholder="Your name"
              />
            </label>
            <label>
              Email Address
              <input
                required
                type="email"
                name="email"
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label>
            Service Interested In
            <select
              name="service"
              defaultValue="Sports Therapy"
            >
              <option>Sports Therapy</option>
              <option>Personal Training</option>
              <option>
                Injury Rehabilitation
              </option>
              <option>
                Performance Coaching
              </option>
              <option>Mobility & Recovery</option>
            </select>
          </label>
          <label>
            Message{" "}
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us a little about your goals, training or injury..."
            />
          </label>
          <button
            className="orange-button orange-button--full"
            type="submit"
          >
            {formSent
              ? "Message Ready"
              : "Send Message"}{" "}
            <ArrowIcon />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
