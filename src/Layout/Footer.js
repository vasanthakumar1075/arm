import React from "react";
import { Link } from "react-router-dom";
import image1 from "../Assets/facebook.png";
import image2 from "../Assets/instagram.png";
import image3 from "../Assets/twitter.png";
import { AiFillLinkedin } from "react-icons/ai";
import "../css/Footer.css";
function Footer() {
  return (
    <div className="container-fluid">
      <div className="Footer">
        <div className="footer-left">
          <h4 className="footer-title">Get in touch</h4>
          <div className="footer-right-one">
            <p>A . R . M . Textiles</p>
            <p>
              9D/15, Ramakrishnapuram North <br />
              Karur - 639001,
            </p>
            <p>Tamil Nadu, India</p>
          </div>
        </div>
        <div className="footer-middle">
          <h4 className="footer-title">Company</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About ">About Us</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="footer-middle-two">
          <h4>Location</h4>
          <iframe
            width="100%"
            height="250"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=A.R.M%20Textiles%20%209D/15,%20Ramakrishnapuram%20North%20Karur%20-%20639001,%20%20Tamil%20Nadu,%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
        <div className="footer-right">
          <h4 className="footer-title">Follow Us</h4>
          <a href="https://www.facebook.com/armexports" target="blank">
            <img className="facebook" src={image1}></img>
          </a>
          <a href="https://www.instagram.com/armtexttiles/" target="blank">
            <img className="instagram" src={image2}></img>
          </a>
          {/* <a href="#">
            <img className="twitter" src={image3}></img>
          </a> */}
          <a
            href=" https://www.linkedin.com/company/10872419/admin/"
            target="blank"
          >
            <AiFillLinkedin size="40px" color="white" className="linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Footer;
