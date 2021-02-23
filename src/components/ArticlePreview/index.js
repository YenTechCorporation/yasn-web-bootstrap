import React from "react";

function ArticlePreview() {
  return (
    <div className="card m-1" style={{ width: "20rem" }}>
      <img
        className="card-img-top"
        src="https://images.pexels.com/photos/776636/pexels-photo-776636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="Card cap"
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-info">
          Read More
        </a>
      </div>
    </div>
  );
}

export default ArticlePreview;
