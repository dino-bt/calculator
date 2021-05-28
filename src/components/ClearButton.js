import React, { Component } from "react";
import "./ClearButton.css";

// we create an the clear button component class 
class ClearButton extends Component {
   
  render() {
  //we add the function here as well 
    return (
      <div className= "clear-btn"
      onClick = {() => this.props.handleClear()}
      >
       {this.props.children}
     </div>
      
    )
  }
};
export default ClearButton;