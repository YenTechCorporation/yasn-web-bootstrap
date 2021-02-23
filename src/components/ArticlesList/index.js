import React from "react";
import ArticlePreview from "../ArticlePreview";

function ArticlesList() {
  const articles = [
    {
      imageURl: "",
      title: "",
      subtitle: "",
      text: "",
    },
    {
      imageURl: "",
      title: "",
      subtitle: "",
      text: "",
    },
    {},
    {},
  ];
  return (
    <div>
      <div className="row d-flex  flex-row flex-wrap">
        {articles.map((article) => (
          <div className="col">
            <ArticlePreview />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArticlesList;
