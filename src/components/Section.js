import React, { Component } from "react";
import Home from "./Section/Home";
import About from "./Section/About";
import Contact from "./Section/Contact";
import Services from "./Section/Services";
import Blog from "./Section/Blog";
import { Route, Switch } from "react-router-dom";
export class Section extends Component {
  render() {
    return (
      <section>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/service" component={Services} />
        </Switch>
      </section>
    );
  }
}

export default Section;
