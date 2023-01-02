import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <p>
          &copy;{" "}
          <a target="_blanc" href="#">
            Murat
          </a>{" "}
          and <a target="_blanc">Ömer</a>
        </p>
        <nav>
          <ul></ul>
        </nav>
      </footer>
    );
  }
}
