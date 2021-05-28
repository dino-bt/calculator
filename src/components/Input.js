import React, { Component } from "react";
import "./input.css";

// we create an input class
class Input extends Component {
  render() {
    return <div className="input">{this.props.children}</div>;
  }
}
export default Input;
