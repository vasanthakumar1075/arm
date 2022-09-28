import React from "react";
import certificate2 from "../Assets/certificateTwo.jpg";
import "../css/Certificate.css";

function Certificate2() {
  window.scrollTo(0, 0);

  return (
    <div className="cert-full-one">
      <img className="imageOne" src={certificate2}></img>
    </div>
  );
}
export default Certificate2;
