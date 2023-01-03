import React, { Component } from "react";

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
