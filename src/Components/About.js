import React from "react";
import "../css/About.css";
import { motion } from "framer-motion";

function About() {
  const pageDurationTwo = {
    in: {
      opacity: 1,
      y: "0",
    },
    out: {
      opacity: 0,
      y: "100%",
    },
  };
  const pageTransitionTwo = {
    duration: 1,
  };
  const pageDuration = {
    in: {
      opacity: 1,
      x: "0",
    },
    out: {
      opacity: 0,
      x: "100%",
    },
  };
  const pageTransition = {
    duration: 1,
  };
  window.scrollTo(0, 0);

  return (
    <div className="about">
      <div className="container">
        <h3>About Us</h3>
        <div className="about-main">
          <motion.div
            className="about-left"
            initial="out"
            animate="in"
            exit="out"
            variants={pageDuration}
            transition={pageTransition}
          >
            <p className="about-top">
              Arumugam Ramasamy Mudaliyar Texttiles is one of the leading
              exporters of cotton home furnishing textiles from Karur, Tamil
              Nadu, India.
            </p>
            <p className="para-one">
              The company is traditionally into weaving textiles for the last
              three decades. After completing 23 years of experience as a master
              weaver- catering to the home market, by the year 1986, we started
              manufacturing fabrics for supplying to exports.
            </p>
            <p className="para-one">
              A.R.M. Texttiles started exporting from the year 2009. We have
              gained reputation and well known in the market for quality and
              reliability. In the course, we have become a key player in the
              Home Made-ups, Home Furnishings, Home Textiles and Home Decor
              Accessories Industry. We are targeting the global market and we
              sell best quality home linen products at a competitive price.We
              have created a niche as manufacturers and exports of an exquisite
              and exclusive range of home furnishings goods ranging from Bed
              Linen, Bath Linen, Table Linen and Kitchen Linen.
            </p>
            <h4>
              SLOGAN OF A.R.M. Texttiles: “YOU NAME IT AND WE HAVE IT ALL”
            </h4>
            <p className="para-one">
              Our products are manufactured in Handloom and Power Loom in
              attractive Check, Stripe, Dobby and Jacquard Patterns in our
              factory at Elavanur, Karur Dist. We have in-house design, pattern
              making, and quality checking team. We do consistent R&D to
              improvise the quality as well as match the market trend.
            </p>
            <p className="para-one">
              We actively participate in trade shows and other events. We have
              been attending HEIMTEXTIL at FRANKFURT, GERMANY for the past 14
              years. HEIMTEXTIL is one of the largest trade fairs in the world
              and it happens in the month of January. Management Team at A.R.M.
              Texttiles is very enthusiastic, dynamic, hardworking and young
              lot. A.R.M. Texttiles is led by managing partners Mr. R.
              Singaravel (MD), Mr. S. Dinesh (JMD), Mr. S. Harish (CEO), Mr. S.
              Raajesh (GM)
            </p>
            <h5>We have been exporting to the following countries</h5>
            <p className="para-one">
              USA, Canada, Italy, France, Germany, Australia, Colombia, Greece,
              Ukraine, Sweden, South Africa
            </p>
            <p className="para-one">
              We are committed to delivering quality products that meet exact
              requirements of the buyers on time, every time. The company
              follows good communication and timely delivery of products.
            </p>
            <h5>Milestone</h5>
            <p className="para-one">Started exporting in the year 2009</p>
          </motion.div>

          {/* About Right Content */}

          <motion.div
            className="about-right"
            initial="out"
            animate="in"
            exit="out"
            variants={pageDurationTwo}
            transition={pageTransitionTwo}
          >
            <div className="about-right-content">
              <h5>Business Type</h5>
              <span>Manufacturer, Exporter & Supplier</span>
            </div>
            <div className="about-right-content">
              <h5>Year of Establishment</h5>
              <span>1984</span>
            </div>
            <div className="about-right-content">
              <h5>Headquartered</h5>
              <span>Karur, Tamil Nadu</span>
            </div>
            <div className="about-right-content">
              <h5>Major Products</h5>
              <span>Table Cloths</span>
            </div>
            <div className="about-right-content">
              <h5>Certificates</h5>
              <p>SA 8000</p>
              <br />
              <p>SGS</p>
              <br />
              <p>OEKO - TEX</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
export default About;
