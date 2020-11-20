import React, { Component } from "react";
import "./App.css";
import KeyPadComponent from "./components/KeyPadComponent";
import ResultComponent from "./components/ResultComponent";
class App extends Component {
  constructor() {
    super();
    this.state = {
      result: "",
    };
  }

  buttonHandler = (button) => {
    // this.setState({
    //   result: button
    // })
    if (button === "=") {
      // execute a function
      this.calculate();
    } else if (button === "C") {
      this.reset();
      // exec a reset
    } else if (button === "CE") {
      // exec a backspace
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };

  calculate = () => {
    let { result } = this.state;
    let checkResult = "";
    if (result.includes("--")) {
      checkResult = result.replace("--", "+");
    } else {
      checkResult = result;
    }

    try {
      this.setState({
        result: (eval(checkResult) || "") + "",
      });
    } catch (error) {
      this.setState({
        result: "ERROR",
      });
    }
  };
  reset = () => {
    this.setState({
      result: "",
    });
  };
  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };
  render() {
    return (
      <div className="calculator">
      <div className="App">
        <h1>Simple Calculator</h1>
        <a target="_blank" rel="noopener noreferrer" className="btn btn-primary" href="https://github.com/gut996/react-Calculator">GitHub Code</a>
        
        <ResultComponent resultAttrib={this.state.result} />
        <KeyPadComponent clickHandler={this.buttonHandler} />
        </div>
      </div>
    );
  }
}

export default App;
