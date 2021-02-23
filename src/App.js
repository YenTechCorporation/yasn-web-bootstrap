import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route component={Home} path="/" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
