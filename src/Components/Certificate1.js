import React from "react";
import certificate1 from "../Assets/certificateOne.jpg";
import "../css/Certificate.css";

function Certificate1() {
  window.scrollTo(0, 0);

  return (
    <div className="cert-full-one">
      <img className="imageOne" src={certificate1}></img>
    </div>
  );
}
export default Certificate1;
