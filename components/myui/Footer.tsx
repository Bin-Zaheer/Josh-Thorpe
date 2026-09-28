import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-glow" aria-hidden />
      <div className="container-jtf">
        <div className="footer-main">
          <div className="footer-brand">
            <Image
              src="/images/logo.webp"
              width={80}
              height={80}
              alt="Josh Thorpe Fitness & Injury Clinic z-100"
            />
            <div>
              <strong>
                JOSH THORPE FITNESS & INJURY
                CLINIC
              </strong>
              <span>
                STRONGER. FASTER. PAIN-FREE.
              </span>
            </div>
          </div>
          <nav
            className="footer-nav"
            aria-label="Footer navigation"
          >
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Services", "#services"],
              ["Results", "#results"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
          </nav>
          <div className="footer-social z-100">
            <a
              href="#contact"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#contact"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#contact"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
            <a
              href="#contact"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div className="footer-bottom z-100">
          <span>
            © 2026 Josh Thorpe Fitness & Injury
            Clinic. All rights reserved.
          </span>
          <span>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
