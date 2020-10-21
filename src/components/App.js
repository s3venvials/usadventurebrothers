import React from "react";
import { Router, Route } from "react-router-dom";
import { history } from "../helpers";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./HomePage";
import Navigation from "./navigation";

function App() {
  return (
    <Router history={history}>
      <Header />
      <Navigation />
      <Route exact path="/" component={HomePage} />
      <Footer />
    </Router>
  );
}

export default App;
