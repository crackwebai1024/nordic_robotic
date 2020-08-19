import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
import Cooperate from "./components/cooperate/Cooperate";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Error from "./components/error/Error";

const BaseRouter = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/cooperate">
          <Cooperate />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </div>
  );
};

export default BaseRouter;
