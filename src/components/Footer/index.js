import React from "react";
import FooterItem from "../FooterItem";

function Footer() {
  const footerData = [
    {
      header: "Contact",
      text1: "yasnetwork1@gmail.com",
      text2: "+86 150 2225 1737",
      text3:""
    },
    {
      header: "Address",
      text1: "https://young-african-scholars-network.netlify.app/",
      text2: "",
      text3:""
    },
    {
      header: "Join us on our social networks",
      text1: "Facebook",
      text2: "LinkedIn",
      text3: "Twitter",
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
