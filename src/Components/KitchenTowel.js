import React from "react";
import "../css/Specification.css";
import product1 from "../Assets/Product-Specification/Kitchen Towel/Kitchen Towel (1).jpg";
import product2 from "../Assets/Product-Specification/Kitchen Towel/Kitchen Towel (2).jpg";
import product3 from "../Assets/Product-Specification/Kitchen Towel/Kitchen Towel (3).jpg";
import product4 from "../Assets/Product-Specification/Kitchen Towel/Kitchen Towel (4).jpg";
import product5 from "../Assets/Product-Specification/Kitchen Towel/Kitchen Towel (5).jpg";

function KitchenTowel() {
  window.scrollTo(0, 0);

  return (
    <div className="container">
      <div className="specification">
        <h3>Kitchen Towel - Dishtowel</h3>
        <div className="product-img-flex">
          <img src={product1} />
          <img src={product2} />
          <img src={product3} />
          <img src={product4} />
          <img src={product5} />
        </div>
        <div className="backdrop">
          <p>
            ARM Towels are Made in 100% Cotton our Major strength is using slub
            Yarn to have a texture in towels. These texture gives life to
            towels. We are making them extra absorbent for dying dishes. Our
            kitchen towels are modern way to update your kitchen decor with bad
            colours or fun designs
            <p>
              We do make special yarn like linen, Polyester, Fancy and Milange
              Yarns Towels are Pre-washed based on special request
            </p>
          </p>
          <div>
            <h3>variety</h3>
            <div className="desc-list">
              <div className="list-one">
                <ul>
                  <li>Dobby Weave</li>
                  <li>Printed</li>
                  <li>One Side Terry</li>
                  <li>Discloth</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default KitchenTowel;
