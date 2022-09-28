import React from "react";
import "../css/Specification.css";
import product1 from "../Assets/Product-Specification/Tote Bag/Tote Bag (1).jpg";
import product2 from "../Assets/Product-Specification/Tote Bag/Tote Bag (2).jpg";
import product3 from "../Assets/Product-Specification/Tote Bag/Tote Bag (3).jpg";
import product4 from "../Assets/Product-Specification/Tote Bag/Tote Bag (4).jpg";
import product5 from "../Assets/Product-Specification/Tote Bag/Tote Bag (5).jpg";

function ToteBags() {
  window.scrollTo(0, 0);

  return (
    <div className="container">
      <div className="specification">
        <h3>Tote - Bags</h3>
        <div className="product-img-flex">
          <img src={product1} />
          <img src={product2} />
          <img src={product3} />
          <img src={product4} />
          <img src={product5} />
        </div>
        <div className="backdrop">
          <p>
            Its is perfect for grocery shopping or every day use. Best way to
            replace plastic bags. It can be washed and reused based on the wash
            instruction bags are mad wirh Small pocket inside to have your
            mobile .
          </p>
          <div>
            <h3>variety</h3>
            <div className="desc-list">
              <div className="list-one">
                <ul>
                  <li>Classic Tote</li>
                  <li>College Bag Tote</li>
                  <li>Net Bag</li>
                </ul>
              </div>
              <div className="List-two">
                <ul>
                  <li>Knit Bag</li>
                  <li>Mesh Bag</li>
                  <li>Jute Bag</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ToteBags;
