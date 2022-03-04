import React from "react";

function FooterItem({ data }) {
  return (
    <div
      className="card text-white bg-dark mb-3 mr-2"
      style={{ maxWidth: "18rem" }}
    >
      <div className="card-header">{data.header}</div>
      <div className="card-body">
        <h5 className="card-title">{data.text1}</h5>
        <p className="card-text">{data.text2}</p>
        <p className="card-text">{data.text3}</p>
      </div>
    </div>
  );
}

export default FooterItem;
