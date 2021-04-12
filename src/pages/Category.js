import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ArticlesList from "../components/ArticlesList";
import db from "../firebase";
import logo from "../images/logo.jpeg";

function Category() {
  const { category } = useParams();
  const [articlesByCat, setArticlesByCat] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .where("category", "==", category)
      .onSnapshot((snapshot) =>
        setArticlesByCat(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, [category]);

  return (
    <div className="container mr-2 bg-light" style={{ height: "100%" }}>
      <h2 style={{ fontFamily: "cursive", textAlign: "center" }}>{category}</h2>
      <hr />
      {articlesByCat.length != 0 ? (
        <ArticlesList contents={articlesByCat} />
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

export default Category;
