import React from "react";
import "../css/Products.css";
import { motion } from "framer-motion";
import image1 from "../Assets/products/Apron.jpg";
import image2 from "../Assets/products/Bag.jpg";
import image3 from "../Assets/products/Beach-Matress.jpeg";
import image4 from "../Assets/products/Cushion.jpg";
import image5 from "../Assets/products/Fouta.jpeg";
import image6 from "../Assets/products/Kitchen-Set.jpg";
import image7 from "../Assets/products/Kitchen-Towel.jpg";
import image8 from "../Assets/products/Placemat.jpg";
import image9 from "../Assets/products/Plastic-Mat.jpg";
import image10 from "../Assets/products/Runner.jpg";
import image11 from "../Assets/products/Table-Cloth.jpg";
import image12 from "../Assets/products/Tupe-Matress.jpeg";
import { Link } from "react-router-dom";

function Products() {
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
    <motion.div
      className="Products"
      initial="out"
      animate="in"
      exit="out"
      variants={pageDuration}
      transition={pageTransition}
    >
      <div className="container">
        <div className="product-head">
          <h2>Our Product Range</h2>
          <p>
            We at A.R.M Exports manufacture a wide range of Home Linen made
            using Handloom and Power Loom. Our Home Textile collection – Bed
            Linen, Table Linen, Kitchen Linen and Home Décor products such as
            Curtains, Cushions and Cushion covers are available in attractive
            Check, Stripe, Dobby and Jacquard Patterns.
          </p>
        </div>
        <div className="product-image-flex">
          <div className="product-card-one">
            <Link to="/apron" target="_blank">
              <img src={image1}></img>
              <div className="product-caption">
                <h3>Apron</h3>
              </div>
            </Link>
          </div>
          <div className="product-card-two">
            <Link to="/totebags" target="_blank">
              <img src={image2}></img>
              <div className="product-caption">
                <h3>Bag</h3>
              </div>
            </Link>
          </div>
          <div className="product-card-three">
            <Link to="/beachmatress" target="_blank">
              <img src={image3}></img>
              <div className="product-caption">
                <h3>Beach Mattress</h3>
              </div>
            </Link>
          </div>
        </div>
        <div className="product-image-flex">
          <div className="product-card-one">
            <Link to="/cushion" target="_blank">
              <img src={image4}></img>
              <div className="product-caption">
                <h3>Cushion</h3>
              </div>
            </Link>
          </div>
          <div className="product-card-two">
            <Link to="/fouta" target="_blank">
              <img src={image5}></img>
              <div className="product-caption">
                <h3>Fouta</h3>
              </div>
            </Link>
          </div>
          <div className="product-card-three">
            <Link to="/kitchenset" target="_blank">
              <img src={image6}></img>
              <div className="product-caption">
                <h3>Kitchen Set</h3>
              </div>
            </Link>
          </div>
        </div>
        <div className="product-image-flex">
          <div className="product-card-one">
            <Link to="/kitchentowel" target="_blank">
              <img src={image7}></img>
              <div className="product-caption">
                <h3>Kitchen Towel</h3>
              </div>
            </Link>
          </div>
          <div className="product-card-two">
            <Link to="/placemat" target="_blank">
              <img src={image8}></img>
              <div className="product-caption">
                <h3>Placemat</h3>
              </div>
            </Link>
          </div>
          <div className="product-card-three">
            <img src={image9}></img>
            <div className="product-caption">
              <h3>Plastic Mat</h3>
            </div>
          </div>
        </div>
        <div
          className="product-image-flex"
          initial="out"
          animate="in"
          exit="out"
          variants={pageDuration}
          transition={pageTransition}
        >
          <div className="product-card-one">
            <Link to="/runner" target="_blank">
              <img src={image10}></img>
              <div className="product-caption">
                <h3>Runner</h3>
              </div>
            </Link>
          </div>
          <div className="product-card-two">
            <Link to="/tablecloth" target="_blank">
              <img src={image11}></img>
              <div className="product-caption">
                <h3>Table Cloth</h3>
              </div>
            </Link>
          </div>
          <div className="product-card-three">
            <img src={image12}></img>
            <div className="product-caption">
              <h3>Tube Mattress</h3>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Products;
