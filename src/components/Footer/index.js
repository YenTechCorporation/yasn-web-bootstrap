import React from "react";
import FooterItem from "../FooterItem";

function Footer() {
  const footerData = [
    {
      header: "Contact",
      text1: "yasnetwork1@gmail.com",
      text2: "Welcome to Young African Scholar Network",
    },
    {
      header: "Address",
      text1: "Beijing - China - Haidian District",
      text2: "Founder: Jean-Baptiste SEBGO",
    },
    {
      header: "Design and Developed By",
      text1: "YENTECHNOLOGY CORPORATION, yentech.corp@gmail.com",
      text2: "Welcome to our Services",
    },
  ];
  return (
    <footer className="footer bg-dark bottom-0">
      <div className="container">
        <div
          className="row d-flex flex-row flex-wrap"
          style={{ justifyContent: "space-between" }}
        >
          {footerData.map((data) => (
            <FooterItem key={data.header} data={data} />
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
