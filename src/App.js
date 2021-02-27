import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import SingleArticle from "./pages/SingleArticle";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={SingleArticle} path="/articles/abc" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
