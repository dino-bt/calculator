import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";
// assign the function addToinput the function val and we set the state wher we will store the current state + the val
// in Order to store the val we need to create the object state where we will store what will be pressed on the calculator
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: " ",
      previousNumber: " ",
      currentNumber: " ",
      operator: " ",
    };
  }

  addToInput = (val) => {
    this.setState({ input: this.state.input + val });
  };
  // we will make an if statematnet to avoil there being more than one decimal in the area
  addDecimal = (val) => {
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + val });
    }
  };

  //we make an if statement for the zero so we can add it back it and if we click on zero it will not show in order to prevent fromadding 0's to the beggening of numbers
  addZeroToInput = (val) => {
    if (this.state.input !== "") {
      this.setState({ input: this.state.input + val });
    }

    //we clear the input by setting the state to an empty array
  };
  clearInput = () => {
    this.setState({ input: "" });
  };

  //we do this so that the previous number and the current input will be up to date

  add = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "plus";
  };

  subtract = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "subtract";
  };

  multiply = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "multiply";
  };

  divide = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "divide";
  };

  evaluate = () => {
    this.state.currentNumber = this.state.input;

    if (this.state.operator == "plus") {
      this.setState({
        input:
          parseInt(this.state.previousNumber) +
          parseInt(this.state.currentNumber),
      });
    } else if (this.state.operator == "subtract") {
      this.setState({
        input:
          parseInt(this.state.previousNumber) -
          parseInt(this.state.currentNumber)
      });
    } else if (this.state.operator == "multiply") {
      this.setState({
        input:
          parseInt(this.state.previousNumber) *
          parseInt(this.state.currentNumber),
      });
    }

    else if (this.state.operator == "divide") {
      this.setState({
        input:
          parseInt(this.state.previousNumber) /
          parseInt(this.state.currentNumber),
      });
    }





  };

  render() {
    //We create three divs one for the main calculator block and for the individual rows
    return (
      <div className="App">
        <div className="calc-wrapper">
          <div className="row">
            <Input>{this.state.input}</Input>
          </div>

          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick ={this.divide}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick ={this.multiply}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.add}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addDecimal}>.</Button>
            <Button handleClick={this.addZeroToInput}>0</Button>
            <Button handleClick={this.evaluate}>=</Button>
            <Button handleClick={this.subtract}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={this.clearInput}> Clear </ClearButton>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
