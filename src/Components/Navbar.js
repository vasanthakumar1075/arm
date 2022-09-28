import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import "../css/Navbar.css";
import catalogue from "../Assets/catalogue.pdf";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <div className="nav-top-content">
        <div>
          <img className="nav-logo-image" src={logo}></img>
        </div>
        <div className="nav-bottom">
          <span className="nav-logo">A.R.M. Texttiles</span>
          <br />
          <span className="nav-bottom-content">
            A Govt. Recognised Star Export House
          </span>
        </div>
      </div>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact Us</Link>
        <a href={catalogue} download={catalogue}>
          <button type="submit" className="download">
            Download Catalouge
          </button>
        </a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
