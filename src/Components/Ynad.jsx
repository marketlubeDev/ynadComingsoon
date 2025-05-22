import React from "react";
import logo from "../assets/ynadlogo.svg";
import decorativeImage from "../assets/ynad1.svg";
import headingImage from "../assets/heading.png";

const Ynad = () => {
  return (
    <div className="sanctuary">
      <img
        src={decorativeImage}
        alt="Decorative Top Element"
        className="sanctuary__decorative-image"
      />

      <div className="sanctuary__overlay">
        <img src={logo} alt="Ynad Logo" className="sanctuary__logo" />
        <img
          src={headingImage}
          alt="Heading"
          className="sanctuary__title-image"
        />
      </div>

      <div className="sanctuary__footer">
        <span>ynadresort@gmail.com</span>
        <span>
          1234 Dolor St, Consectetur District,
          <br />
          Ipsum City 66789, Loremland
        </span>
        <span>+91 9999 565 282</span>
      </div>
    </div>
  );
};

export default Ynad;
