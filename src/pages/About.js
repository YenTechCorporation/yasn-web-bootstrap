import React from "react";
import logo from "../images/logo.jpeg";
function About() {
  return (
    <div style={{ textAlign: "center" }}>
      About Young African Scholar Network
      <br />
      <hr />
      <img
        src={logo}
        style={{ width: "100%", height: "40rem", objectFit: "contain" }}
        alt="logo"
      />
    </div>
  );
}

export default About;
