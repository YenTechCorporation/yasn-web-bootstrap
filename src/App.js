import React, { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Footer from "./components/Footer";
import About from "./pages/About";
import SingleArticle from "./pages/SingleArticle";
import ArticleOfMonth from "./pages/ArticleOfMonth";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={SingleArticle} path="/articles/:id" />
          <Route component={ArticleOfMonth} path="/articleofmonth" />
          <Route component={About} path="/about" />
          <Route component={Category} path="/category/:category" />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
