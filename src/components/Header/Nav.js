import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Nav extends Component {
  state = {
    toggle: false,
  };
  menuToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    const { toggle } = this.state;
    return (
      <>
        <ul className={toggle ? "toggle" : ""}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/service">Services</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li onClick={this.menuToggle} className="close">
            X
          </li>
        </ul>
        <div onClick={this.menuToggle} className="menu">
          Menu
        </div>
      </>
    );
  }
}

export default Nav;
