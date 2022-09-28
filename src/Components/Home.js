import React from "react";
import main from "../Assets/main-img.JPG";
import cert1 from "../Assets/certificate1.png";
import cert2 from "../Assets/certificate2.png";
import cert3 from "../Assets/certificate3.png";
import cert4 from "../Assets/certificate4.png";
import cert5 from "../Assets/certificate5.png";
import owner1 from "../Assets/owner1.jpg";
import owner2 from "../Assets/owner2.jpg";
import owner3 from "../Assets/owner3.jpg";
import owner4 from "../Assets/owner4.JPG";
import infrastructure from "../Assets/Infrastructure.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../css/Home.css";

function Home() {
  window.scrollTo(0, 0);

  const data = [
    {
      icon: cert1,
      component: "/certificate1",
    },
    {
      icon: cert2,
      component: "/certificate2",
    },
    {
      icon: cert3,
      component: "/certificate2",
    },
    {
      icon: cert4,
      component: "/certificate4",
    },
    {
      icon: cert5,
      component: "/certificate5",
    },
  ];

  const owner = [
    {
      icon: owner1,
      name: "Mr.R.Singaravel(M.D)",
      number: 9894741962,
      content:
        "Known person in town for his weaving techniques, Reliability, Designing work and Quality Management. He has born and bought up from a weaving factory in his childhood days ",
    },
    {
      icon: owner2,
      name: "Mr.S.Dinesh(J.M.D)",
      number: 9047080962,
      content:
        "Once after his studies he joined the business. From then till now he has full experience in business and mainly he is focused and his experience in Printing and Quality Management ",
    },
  ];

  const ownerList = [
    {
      icon: owner3,
      name: "Mr.S.Harish(C.E.O)",
      number: 9843031962,
      content:
        "Graduated from UK with a master degree in business administration Mr Harish Singaravel is looking after Merchandising in business and looks after sourcing and management skills.",
    },
    {
      icon: owner4,
      name: "Mr.S.Raajesh(G.M)",
      number: 9994990962,
      content:
        "Graduated from UK with a master degree in business administration,He is looking after merchandising and Finance and Accounts. His leadership and Everyone’s support ARM has grown into one of the leading exporters in town. ",
    },
  ];

  const pageDurationTwo = {
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: "20px",
    },
  };
  const pageTransitionTwo = {
    duration: 1,
  };

  return (
    <div className="Home">
      <div className="container-fluid">
        <motion.div
          className="main-img"
          initial="out"
          animate="in"
          exit="out"
          variants={pageDurationTwo}
          transition={pageTransitionTwo}
        >
          <img src={main}></img>
        </motion.div>
        <div className="container">
          <div className="about-content">
            <h3>
              Arumugam Ramasamy Mudaliyar Texttiles is one of the leading
              exporters of cotton home furnishing textiles.
            </h3>
            <p>
              We have created a niche as manufacturers and exports of an
              exquisite and exclusive range of home furnishings goods ranging
              from Bed Linen, Bath Linen, Table Linen and Kitchen Linen.
            </p>
          </div>
        </div>

        {/* infrastructure section */}

        <div className="infrastructure">
          <div className="infra-content">
            <div className="infra-content-list">
              <h3 className="infra-title">Why Us</h3>
              <p>Huge production capacity</p>
              <p>Quality of products with certification</p>
              <p>
                Highly skilled staff. We have about 100 employees in office,
                production and stitching department
              </p>
              <p>Latest technology machines to cater the demand</p>
              <p>Efficient management team</p>
            </div>
            <div className="infra-content-para">
              <h3 className="infra-title">Quality Assurance</h3>
              <p>
                Quality assurance is one of the greatest of A.R.M Texttiles.
                <br />
                <br /> We have an in-house quality check team who ensure that
                only the best reaches our customers.
              </p>
              <h2 className="second-subtitle">The way we work</h2>
              <p>Market Research</p>
              <p>Product Monitoring and Quality Control</p>
              <p>International Standard Compliance</p>
              <p>
                We carry out quality check in two phases. We have a regular
                check as well as random check.
              </p>
            </div>
          </div>
          <div className="infra-image">
            <img src={infrastructure}></img>
          </div>
        </div>

        {/* Certificates Section */}

        <div className="container-fluid">
          <h3 className="cert-name">Our Certificates</h3>
          <div className="certificates">
            {data.map((item, index) => (
              <div key={index} className="cert-list">
                <Link to={item.component} target="_blank">
                  <img src={item.icon} />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <h3 className="owner-title">Our Management</h3>
        <div className="owner-list">
          {owner.map((item, index) => (
            <div className="owner-main">
              <div key={index} className="owner-pic">
                <img src={item.icon} />
                <span>{item.name}</span>
              </div>
              <div className="owner-content">
                <p className="owner-detail">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="owner-list">
          {ownerList.map((item, index) => (
            <div className="owner-main">
              <div key={index} className="owner-pic">
                <img src={item.icon} />
                <span>{item.name}</span>
              </div>
              <div className="owner-content">
                <p className="owner-detail">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Home;
