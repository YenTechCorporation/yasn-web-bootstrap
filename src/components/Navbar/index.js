import React, { useState, useEffect } from "react";

import "./navbar.css";
import logo from "../../images/logo.jpeg";
import { Link } from "react-router-dom";
import db from "../../firebase";

function Navbar() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    db.collection("categories").onSnapshot((snapshot) =>
      setCategories(snapshot.docs.map((doc) => doc.id))
    );
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/support">
              Support
            </Link>
          </li>

          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="/"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Categories
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              {categories.map((category) => (
                <Link
                  key={category}
                  className="dropdown-item"
                  to={"/category/" + category}
                >
                  {category}
                </Link>
              ))}
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="/"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Language
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item">English</Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item">Français</Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" to="/">
              Login
            </Link>
          </li>
        </ul>
        <form className="form-inline ml-4 my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
