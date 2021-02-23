import React from "react";
import ArticlesList from "../ArticlesList";

function HomeBody() {
  return (
    <div className="container mr-2 bg-light">
      <h2 style={{ fontFamily: "cursive", textAlign: "center" }}>
        Recent Articles
      </h2>
      <hr />
      <ArticlesList />
    </div>
  );
}

export default HomeBody;
