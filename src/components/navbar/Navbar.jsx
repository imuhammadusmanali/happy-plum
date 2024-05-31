import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/img/logo.png";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleBodyScroll = () => {
      if (menuOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleBodyScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <img src={Logo} alt="Logo" className="navbar-logo" />
      <div className={`navbar-menu ${menuOpen ? "open" : ""}`}>
        <ul className="text-sm">
          <li>
            <a href="#hero" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about-us" onClick={() => setMenuOpen(false)}>
              About Us
            </a>
          </li>
          <li>
            <a href="#team" onClick={() => setMenuOpen(false)}>
              Meet the Team
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={() => setMenuOpen(false)}>
              Testimonials
            </a>
          </li>
          <li>
            <a href="#contact-us" onClick={() => setMenuOpen(false)}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div
        className={`hamburger w-9 h-9 place-content-center ${
          menuOpen ? "open" : ""
        }`}
        onClick={toggleMenu}
      >
        {menuOpen ? (
          <IoClose className="w-6 h-6" />
        ) : (
          <IoMenu className="w-6 h-6" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
