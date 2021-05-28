import React, { Component } from "react";
import "./Button.css";

//we create a double negative if it is not a number eg a letter and then sayin it is not a letter will make it a number value 
// we then create the or to say that we will return the . and the = sign 
// we create an arrow function as well with the isOperator 
class Button extends Component {
    isOperator = val =>{
        return !isNaN(val) || val === "." || val === "=" ;
    


    }
  render() {
    //We now want to import what is in the App into the button component
    // We assign each button and then we get the children elements 
    // we then assign the operator and say that if is true eg a number an = or a decimal sign  we add nothing but if false we assign a class called operator
    // we assign onClick to the props Handleclick and add the children 
    return (
      <div 
      
      className={`button ${this.isOperator(this.props.children) ? " ":"operator" }`}
      onClick = {() => this.props.handleClick(this.props.children)} 
      >
      
      {this.props.children}
   
        </div>
      
    )
  }
}
export default Button;
