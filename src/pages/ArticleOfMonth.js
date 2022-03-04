import React, { useState, useEffect } from "react";
import ArticlePreview from "../components/ArticlePreview";
import db from "../firebase";
import logo from "../images/logo.jpeg";

function ArticleOfMonth() {
  const [monthArticle, setMonthArticle] = useState();

  useEffect(() => {
    db.collection("posts")
      .where("isYearArticle", "==", true)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) =>
          setMonthArticle({
            id: doc.id,
            data: doc.data(),
          })
        );
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);
  console.log(monthArticle);
  if (!monthArticle) {
    return (
      <div
        style={{
          flex: 1,
          height: "100vh",
          fontSize: "500",
          textAlign: "center",
        }}
      >
        Article of the month
        <img
          src={logo}
          style={{ width: "100%", height: "40rem", objectFit: "contain" }}
          alt="logo"
        />
      </div>
    );
  }
  return (
    <div className="container mr-2 bg-light" style={{ flex: 1 }}>
      <br />
      <h2 style={{ fontFamily: "cursive", textAlign: "center" }}>
        Month's Article: {monthArticle && monthArticle.data.title}
      </h2>
      <hr />
      <ArticlePreview article={monthArticle} />
      <br />
      <hr />
    </div>
  );
}

export default ArticleOfMonth;
