import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

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
              ["Home", "/"],
              ["Services", "/services"],
              ["About Us", "/about"],
              ["Contact Us", "/contactus"],
            ].map(([label, href]) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
          </nav>
          <div className="footer-social z-100">
            <a
              href="https://www.instagram.com/joshthorpe_fitness/"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a href="#home" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#home" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a
              href="https://wa.me/447583275586"
              aria-label="LinkedIn"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
        <div className="footer-bottom z-100">
          <span className="text-white">
            © 2026 Josh Thorpe Fitness & Injury
            Clinic. All rights reserved.
          </span>
          <span className="text-[13px] text-white">
            Powered By:BinZaheer
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
