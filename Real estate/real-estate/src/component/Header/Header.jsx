import "./Header.css";

import React from "react";
import Button from "./button";

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings h-container">
        <img src="./images/logo.png" style={{ width: 100 }} alt="" />

        <div className="h-menu">
          <a href="">Residenicies</a>
          <a href="">Our Values</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <Button name="Contact" />
        </div>
      </div>
    </section>
  );
};

export default Header;
