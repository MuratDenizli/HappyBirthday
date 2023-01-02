import React, { Component, Fragment } from "react";
import Balloons from "./Balloons";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
    };
  }

  componentDidMount() {
    document.title = `Happy birthday${this.props.name + "!"}`;

    this.meta = document.createElement("meta");
    this.meta.name = "description";
    document.getElementsByTagName("head")[0].appendChild(this.meta);

    setTimeout(() => {
      this.setState({ renderText: true });
    }, 8500);
  }

  render() {
    return (
      <Fragment>
        <Balloons />
        <main>
          <p className="receiver">
            Happy birthday{this.state.name && ", " + this.state.name}!
          </p>
        </main>
      </Fragment>
    );
  }
}
