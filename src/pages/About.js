import React from "react";
import logo from "../images/logo.jpeg";
function About() {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{marginLeft:"25%",marginRight:"25%", marginTop:"5%",textAlign: "center"}}>
      About Young African Scholar Network
      The Young African Scholars Network (YASN) is a Think tank 
      that brings together young professionals and students 
      from all backgrounds to challenge the emerging issues 
      of the African continent. 
      </div>
      <br />
      <img
        src={logo}
        style={{ width: "100%", height: "40rem", objectFit: "contain" }}
        alt="logo"
      />
    </div>
  );
}

export default About;
