import React from "react";
import "./navbar.css";
import logo from "../../images/logo.jpg";
import { Link } from "react-router-dom";
function Navbar() {
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
            <Link className="nav-link" to="/monthArticle">
              Month's Article
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/events">
              Events
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/archives">
              Archives
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Blog
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
              Language
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/">
                English
              </Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="/">
                French
              </Link>
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
            placeholder="Search"
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
