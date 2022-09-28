import React from "react";
import "../css/Specification.css";
import product1 from "../Assets/Product-Specification/Placemat/Placemat (1).jpg";
import product2 from "../Assets/Product-Specification/Placemat/Placemat (2).jpg";
import product3 from "../Assets/Product-Specification/Placemat/Placemat (3).jpg";
import product4 from "../Assets/Product-Specification/Placemat/Placemat (4).jpg";
import product5 from "../Assets/Product-Specification/Placemat/Placemat (5).jpg";

function Placemat() {
  window.scrollTo(0, 0);

  return (
    <div className="container">
      <div className="specification">
        <h3>Placemat</h3>
        <div className="product-img-flex">
          <img src={product1} />
          <img src={product2} />
          <img src={product3} />
          <img src={product4} />
          <img src={product5} />
        </div>
        <div className="backdrop">
          <p>
            Placemats are mad in a variety of fabrics and quality in cotton,
            Polyester, Slub, Natural And all synthetic blends As, we are a
            traditional weaver we play in warp and weft To get our own unique
            designs and we created A great demand in the international market
            For our placemats
          </p>
          <div>
            <h3>We are specialized in</h3>
            <div className="desc-list">
              <div className="list-one">
                <ul>
                  <li>100% Cotton</li>
                  <li>100% Jute</li>
                  <li>Natural Fabric</li>
                  <li>Milange</li>
                </ul>
              </div>
              <div className="List-two">
                <ul>
                  <li>Slub / cotton</li>
                  <li>Polyester / Cotton</li>
                  <li>Jute / Cotton</li>
                  <li>Fancy Yarn</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Placemat;
