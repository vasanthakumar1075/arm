import React from "react";
import "../css/Specification.css";
import product1 from "../Assets/Product-Specification/Fouta/Fouta (1).jpg";
import product2 from "../Assets/Product-Specification/Fouta/Fouta (2).jpg";
import product3 from "../Assets/Product-Specification/Fouta/Fouta (3).jpg";
import product4 from "../Assets/Product-Specification/Fouta/Fouta (4).jpg";
import product5 from "../Assets/Product-Specification/Fouta/Fouta (5).jpg";

function Fouta() {
  window.scrollTo(0, 0);

  return (
    <div className="container">
      <div className="specification">
        <h3>Fouta</h3>
        <div className="product-img-flex">
          <img src={product1} />
          <img src={product2} />
          <img src={product3} />
          <img src={product4} />
          <img src={product5} />
        </div>
        <div className="backdrop">
          <p>
            Fouta – summer towels are everywhere now and it can Br used as wrap,
            cotton handkerchief for the sun and Beach holiday or as a blankets.
            It dries out very quickly, So soft and very fresh, Perfect for
            sunbath. 100% cotton It comes in fresh summer colors and light like
            a feather And it dries out incredibly fast Edges are hand knotted
            <br />
            <strong> Size : 100*180 CM, 95*195 CM, and 80*160 CM</strong>
          </p>
          <div>
            <h3>We are specialized in</h3>
            <div className="desc-list">
              <div className="list-one">
                <ul>
                  <li>Soft Terry Back Fouta</li>
                  <li>Printed Fouta</li>
                  <li>Dobby Fouta</li>
                  <li>Voile Fouta</li>
                  <li>Jacquard Fouta</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Fouta;
