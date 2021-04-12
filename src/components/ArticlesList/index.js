import React from "react";
import { Link } from "react-router-dom";
import ArticlePreview from "../ArticlePreview";

function ArticlesList({ contents }) {
  return (
    <div>
      <div
        className="row d-flex  flex-row flex-wrap"
        style={{ flex: 1, height: "100%" }}
      >
        {contents.map((article) => (
          <div className="col" key={article.id}>
            <Link
              style={{ textDecoration: "none" }}
              to={"/articles/" + article.id}
              key={article.id}
            >
              <ArticlePreview article={article} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArticlesList;
