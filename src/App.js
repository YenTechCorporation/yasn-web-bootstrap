import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Footer from "./components/Footer";
import SingleArticle from "./pages/SingleArticle";
import MonthArticle from "./pages/MonthArticle";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={SingleArticle} path="/articles/:id" />
          <Route component={MonthArticle} path="/monthArticle" />
          {/* <Route component={} path="/events" /> */}
          <Route component={Category} path="/category/:category" />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
