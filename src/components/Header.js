import React, { Component } from "react";
import Logo from "./Header/Logo";
import Nav from "./Header/Nav";

export class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <Logo />
          <Nav />
        </header>
      </div>
    );
  }
}

export default Header;
