import React from "react";
import FooterItem from "../FooterItem";

function Footer() {
  const footerData = [
    {
      header: "",
      text1: "",
      text2: "",
    },
    {
      header: "",
      text1: "",
      text2: "",
    },
  ];
  return (
    <footer className="footer bg-dark">
      <div className="container">
        <div className="row d-flex flex-row flex-wrap">
          {footerData.map((data) => (
            <FooterItem />
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
