import React, { useState, useEffect } from "react";
import ArticlesList from "../ArticlesList";
import db from "../../firebase";
import logo from "../../images/logo.jpeg";

function HomeBody() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("createdate", "asc")
      .onSnapshot((snapshot) =>
        setArticles(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  return (
    <div className="container mr-2 bg-light" style={{ height: "100%" }}>
      <h2 style={{ fontFamily: "cursive", textAlign: "center" }}>
        Recent Articles
      </h2>
      <hr />
      {articles.length !== 0 ? (
        <ArticlesList contents={articles} />
      ) : (
        <>
          <h2 style={{ textAlign: "center" }}>Articles not found</h2>
          <img
            src={logo}
            style={{ width: "100%", height: "40rem", objectFit: "contain" }}
            alt="logo"
          />
        </>
      )}
    </div>
  );
}

export default HomeBody;
