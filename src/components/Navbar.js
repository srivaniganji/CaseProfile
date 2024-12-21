import React, { useState } from "react";
import { FaStethoscope, FaXRay, FaVirus, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo and Actions */}
      <div className="navbar-top">
        <div className="navbar-logo">
          <h1>CASE.PROFILE</h1>
        </div>
        <div className="navbar-actions">
          <button className="btn">Book a Demo Session</button>
          <button className="btn">Contact Us</button>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} color="white" /> : <FaBars size={24} color="white" />}
        </div>
      </div>

      {/* Navigation Links */}
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#healthcare-aid">
              AI Healthcare Aid
              <FaStethoscope size={20} />
            </a>
          </li>
          <li className="line">
            |
          </li>
          <li>
            <a href="#medical-imaging">
              Medical Imaging
              <FaXRay size={20} />
            </a>
          </li>
          <li className="line">
            |
          </li>
          <li>
            <a href="#disease-markers">
              Disease Markers Identifier
              <FaVirus size={20} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
