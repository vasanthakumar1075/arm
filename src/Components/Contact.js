import React from "react";
import "../css/Contact.css";

function Contact() {
  window.scrollTo(0, 0);

  return (
    <div className="container-fluid">
      <div className="contact-main">
        <div className="contact-left-flex">
          <div>
            <h3>Contact Details</h3>
            <h4>A.R.M Texttiles</h4>
          </div>
          <div className="contact-details">
            <h5>Mr. R. Singaravel (MD) - 9894741962</h5>
            <h5>Mr. S. Dinesh (JMD) - 9047080962</h5>
            <h5>Mr. S. Harish (CEO) - 9843031962</h5>
            <h5>Mr. S. Raajesh (GM) - 9994990962</h5>
          </div>
          <div className="contact-address">
            <p>
              <span>Ph :</span> +(91)-4324-230962, 230466
            </p>
            <p>
              <span>Email :</span> armtex@armtex.in
            </p>
            <p>
              <span>Address :</span> 9D/15, Ramakrishnapuram North Karur -
              639001, Tamil Nadu, India
            </p>
          </div>
        </div>
        <div className="contact-right-flex">
          <h4>Enquiry Form</h4>
          <div className="enquiry-input">
            <form id="input-form">
              <div>
                <input className="form-input" placeholder="Name" />
                <input className="form-input" placeholder="Email" type="text" />
              </div>
              <div>
                <input className="form-input" placeholder="Phone" />
                <input className="form-input" placeholder="Location" />
              </div>
              <div>
                <input
                  className="form-input-two"
                  placeholder="Enter your requirement in detail"
                />
              </div>
              <div className="submit">
                <button className="submit-btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
