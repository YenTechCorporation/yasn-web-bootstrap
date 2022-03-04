import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

const ArticlePreview = ({
  article: {
    id,
    data: { title, src, authorId, articlebody },
  },
}) => {
  return (
    <div className="card m-1" style={{ width: "20rem" }}>
      {src !== null ? <img className="card-img-top" style={{ height: "15rem"}}src={src.src} alt={title} />:<></>}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Author : {authorId}</h6>
        {/* <p className="text-center" style={{textColor:"black"}}>{parse(articlebody)}</p> */}
        <Link to={"/articles/" + id} className="btn btn-info">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default ArticlePreview;
