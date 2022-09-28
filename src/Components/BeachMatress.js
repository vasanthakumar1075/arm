import React from "react";
import "../css/Specification.css";
import image1 from "../Assets/products/Beach-Matress.jpeg";

function BeachMatress() {
  window.scrollTo(0, 0);

  return (
    <div className="container">
      <div className="specification">
        <div className="backdrop">
          <h3>Beach Matress</h3>
          <p>
            The beach mattress is great for lazy days and super Comfort. The
            mattress is mad of 100% cotton, comes In a nice combination of sea
            colors. Fits perfectly in the Beach. Easy to carry and relax
            yourself with the nature - Only 700 grams. With this Beach mattress
            and hand Full of eatables in beach can make your day. It has vibrant
            summer colors
          </p>
          <img src={image1} width="100%"></img>
        </div>
      </div>
    </div>
  );
}
export default BeachMatress;
