import React from "react";
import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import { BrowserRouter as Router, Route } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Section />
        </div>
      </Router>
    );
  }
}

export default App;
