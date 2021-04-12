import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Comment from "../components/Comment";
import "./SingleArticle.css";
import db from "../firebase";
import parse from "html-react-parser";

function SingleArticle() {
  const { id } = useParams();
  const [post, setPost] = useState();
  const [author, setAuthor] = useState({});
  const [coArticles, setCoArticles] = useState([]);
  const [input, setInput] = useState("");
  const [name, setName] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .where("id", "==", id)
      .get()
      .then((snapshot) =>
        snapshot.forEach((doc) =>
          setPost({
            title: doc.data().title,
            authorId: doc.data().authorId,
            category: doc.data().category,
            lastupdate: new Date(
              doc.data().lastupdate.toDate()
            ).toLocaleString(),
            articlebody: doc.data().articlebody,
            articleImg: doc.data().src.src,
          })
        )
      );
  }, [id]);
  console.log(post);
  useEffect(() => {
    if (post) {
      db.collection("authors")
        .where("id", "==", post.authorId)
        .get()
        .then((snapshot) =>
          snapshot.forEach((doc) =>
            setAuthor({
              authorName: doc.data().name,
              position: doc.data().position,
              authorImg: doc.data().src.src,
            })
          )
        );
    }
  }, [id, post]);
  console.log(author);
  const moreArticles = () => {
    if (post) {
      db.collection("posts")
        .orderBy("lastupdate", "desc")
        .where("category", "==", post.category)
        .onSnapshot((snapshot) =>
          setCoArticles(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              title: doc.data().title,
              category: doc.data().category,
              articlebody: doc.data().articlebody,
            }))
          )
        );
    }
  };
  useEffect(() => {
    db.collection("posts")
      .doc(id)
      .collection("comments")
      .onSnapshot((snapshot) =>
        setComments(
          snapshot.docs.map((doc) => ({
            id: doc.data().id,
            name: doc.data().name,
            impression: doc.data().impression,
          }))
        )
      );
  }, [id]);

  console.log(post);
  console.log(coArticles);

  const sendComment = (e) => {
    e.preventDefault();
    if (input !== "" && name !== "") {
      if (comments) {
        setComments([
          ...comments,
          {
            name,
            impression: input,
          },
        ]);
      } else {
        db.collection("posts").doc(post.id).collection("comments").add({
          id: id,
          name,
          impression: input,
        });
      }
    }

    setInput("");
    setName("");
  };
  console.log(comments);

  return (
    <div>
      <section
        className="banner-section"
        style={{ backgroundImage: `url(${post && post?.articleImg})` }}
      ></section>
      <section className="post-content-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 post-title-block">
              <h1 className="text-center">{post && post.title}</h1>
              <ul className="list-inline text-center">
                <li>By {post && post.authorId} |</li>
                <li>{post && post.category} |</li>
                <li>{post && post.lastupdate} |</li>
              </ul>
            </div>
            <br />
            <br />
            <div className="col-lg-9 col-md-9 col-sm-12">
              <div className="lead">{post && parse(post.articlebody)}</div>

              <div className="image-block">
                <img
                  src={post && post.articleImg}
                  alt="Article Image"
                  className="img-responsive"
                />
              </div>
              <br />
              <br />
              <hr />
              <div>
                <h2>Comments</h2>
                {comments &&
                  comments.map(({ id, name, impression }) => (
                    <Comment key={id} name={name} content={impression} />
                  ))}
              </div>
            </div>
            <div className="col-lg-3  col-md-3 col-sm-12">
              <div className="well">
                <h2>Comments</h2>
                <p>Share your thoughts about the article here</p>
                <div className="input-group">
                  <form>
                    <input
                      type="text"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name..."
                    />
                    <input
                      type="text"
                      className="form-control"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Write your impressions..."
                    />
                    <span className="input-group-btn">
                      <button
                        className="btn btn-default"
                        type="submit"
                        onClick={sendComment}
                      >
                        SUBMIT
                      </button>
                    </span>
                  </form>
                </div>
              </div>
              <div className="well">
                <ul className="list-inline">
                  <li>
                    <span
                      className="glyphicon glyphicon-heart"
                      aria-hidden="true"
                    ></span>
                  </li>
                  <li>
                    <span
                      className="glyphicon glyphicon-heart"
                      aria-hidden="true"
                    ></span>
                  </li>
                  <li>
                    <span
                      className="glyphicon glyphicon-heart"
                      aria-hidden="true"
                    ></span>
                  </li>
                  <li>
                    <span
                      className="glyphicon glyphicon-heart"
                      aria-hidden="true"
                    ></span>
                  </li>
                </ul>
              </div>
              <div className="well">
                <h2>About Author</h2>
                <img
                  src={author.authorImg}
                  alt="Author Image"
                  className="img-rounded"
                />
                <p>
                  {author.authorName} | {author.position}
                </p>
                {/* <a href="#" className="btn btn-default">
                  Read more
                </a> */}
              </div>

              <div>
                <button className="btn btn-default" onClick={moreArticles}>
                  Read more articles
                </button>
              </div>
              <br />
              <div className="list-group">
                {coArticles &&
                  coArticles.slice(0, 3).map((article) => (
                    <div key={article.id}>
                      <Link
                        className="list-group-item active"
                        to={"/articles/" + article.id}
                        style={{ textDecoration: "none" }}
                      >
                        {" "}
                        <h5 className="list-group-item-heading">
                          {" "}
                          <strong>{article && article.title}</strong>
                        </h5>{" "}
                        <div className="list-group-item-text">
                          <small
                            style={{
                              fontSize: "medium",
                            }}
                          >
                            {article && parse(article.articlebody.slice(0, 50))}
                            ...
                          </small>
                        </div>{" "}
                      </Link>
                      <hr />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /container --> */}
      </section>
    </div>
  );
}

export default SingleArticle;
