import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import "/home/akshay/Documents/Product-Management-Application/client/src/styles/Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="app-footer">
      <div className="container footer-inner">
        <div className="footer-section">
          <h3>ProductManager Mini</h3>
          <p className="muted">
            Manage herbicides, pesticides, fungicides, and fertilizers with ease.  
            A simple product management app built for demos & evaluations.
          </p>
        </div>

        <div className="footer-section collapsible">
          <h4 onClick={() => toggleSection("links")}>
            Quick Links <span>{openSection === "links" ? "−" : "+"}</span>
          </h4>
          <ul className={openSection === "links" ? "open" : ""}>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Explore Products</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section collapsible">
          <h4 onClick={() => toggleSection("contact")}>
            Contact <span>{openSection === "contact" ? "−" : "+"}</span>
          </h4>
          <div className={openSection === "contact" ? "open" : ""}>
            <p>Email: <a href="mailto:youremail@example.com">youremail@example.com</a></p>
            <p>Phone: +91 XXXXXXXXXX</p>
            <p>Location: Hyderabad, India</p>
          </div>
        </div>

        <div className="footer-section collapsible">
          <h4 onClick={() => toggleSection("socials")}>
            Follow Us <span>{openSection === "socials" ? "−" : "+"}</span>
          </h4>
          <div className={`social-icons ${openSection === "socials" ? "open" : ""}`}>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} ProductManager Mini • All Rights Reserved</p>
      </div>
    </footer>
  );
}
