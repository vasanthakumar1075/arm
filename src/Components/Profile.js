import React from "react";
import { motion } from "framer-motion";
import Carousel from "react-bootstrap/Carousel";
import product1 from "../Assets/Slide/slide1.jpg";
import product2 from "../Assets/Slide/slide2.jpg";
import product3 from "../Assets/Slide/slide3.jpg";
import product4 from "../Assets/Slide/slide4.jpg";
import "../css/Profile.css";
function Profile() {
  const pageDurationTwo = {
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: "100%",
    },
  };
  const pageTransitionTwo = {
    duration: 1,
  };
  window.scrollTo(0, 0);
  return (
    <div className="profile">
      <motion.div
        className="container-fluid"
        initial="out"
        animate="in"
        exit="out"
        variants={pageDurationTwo}
        transition={pageTransitionTwo}
      >
        <Carousel>
          <Carousel.Item>
            <img src={product1}></img>
          </Carousel.Item>
          <Carousel.Item>
            <img src={product2}></img>
          </Carousel.Item>
          <Carousel.Item>
            <img src={product3}></img>
          </Carousel.Item>
          <Carousel.Item>
            <img src={product4}></img>
          </Carousel.Item>
        </Carousel>
      </motion.div>
      <div className="container">
        <div className="profile-main">
          <div className="profile-right-flex">
            <h3>Vision & Mission</h3>
            <h4>Vision</h4>
            <ul>
              <li>
                The vision of the company is to be a dynamic, profitable and
                growth-oriented company by providing good return on investment
                to its shareholders and investors, quality products to its
                customers, a secured and friendly environment place of work to
                its employees and to project India’s image in the international
                market
              </li>
              <li>
                To be leading producer of textile products by producing the
                highest quality of products and services to its customers
              </li>
              <li>
                To strive for excellence through commitment, integrity, honesty
                and teamwork
              </li>
            </ul>
            <h4>Mission</h4>
            <ul>
              <li>
                To be highly ethical company and be repeated corporate citizen
                to continue playing due role in the social and environmental
                sectors of the company
              </li>
              <li>
                To develop and an extremely motivated and professionally trained
                workforce, which would drive growth through innovation and
                renovation
              </li>
              <li>To Sustained growth in earning in real terms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
