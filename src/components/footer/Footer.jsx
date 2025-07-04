import React from "react";
import {FooterStyle} from "../footer/FooterStyle";

const Footer = () => {

  return (
    <FooterStyle>
      <div  className="foot">
      <p className="copy">&copy; Naz-codes {new Date().getFullYear()}</p>
      </div>
    </FooterStyle>
  );
};

export default Footer;