import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="contein-footer">
      <div className="links">
        <h4>About Us</h4>
        <h4>Contact</h4>
      </div>
      <div className="logos-TyF">
        <div className="twitter">
          <img src="../../public/images/twitter.svg" alt="logo-twitter" />
          <h4>Twitter</h4>
        </div>
        <div className="facebook">
          <img src="../../public/images/facebook.svg" alt="logo-facebook" />
          <h4>Facebook</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
