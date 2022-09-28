import React from "react";
import "../css/Specification.css";
import product1 from "../Assets/Product-Specification/Kitchen Set/Kitchen Set (1).jpg";
import product2 from "../Assets/Product-Specification/Kitchen Set/Kitchen Set (2).jpg";
import product3 from "../Assets/Product-Specification/Kitchen Set/Kitchen Set (3).jpg";
import product4 from "../Assets/Product-Specification/Kitchen Set/Kitchen Set (4).jpg";
import product5 from "../Assets/Product-Specification/Kitchen Set/Kitchen Set (5).jpg";

function KitchenSet() {
  window.scrollTo(0, 0);

  return (
    <div className="container">
      <div className="specification">
        <h3>Kitchen - Set</h3>
        <div className="product-img-flex">
          <img src={product1} />
          <img src={product2} />
          <img src={product3} />
          <img src={product4} />
          <img src={product5} />
        </div>
        <div className="backdrop">
          <p>
            ARM Feel you experience a world class textile quality And offering a
            wide range of designs for both formal and casual dining of kitchen
            sets. Always we Encounter our valued customers with different styles
            And fabric materials classic aprons and vibrant Colors Napkins with
            variety of sizes for each destinations. Kitchen linens with padding.
            Comfort and safety around Your kitchen and dining room
          </p>
          <div>
            <h3>We are specialized in</h3>
            <div className="desc-list">
              <div className="list-one">
                <ul>
                  <li>Cotton Dobby Weave</li>
                  <li>Cotton with Print</li>
                  <li>Wrinkle</li>
                </ul>
              </div>
              <div className="List-two">
                <ul>
                  <li>Stone Wash</li>
                  <li>Linen</li>
                  <li>Denim</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default KitchenSet;
