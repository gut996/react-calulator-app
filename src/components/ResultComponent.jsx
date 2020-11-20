import React, { Component } from "react";
class ResultComponent extends Component {
  render() {
    let { resultAttrib } = this.props;
    return (
      <div className="result">
        <p>{resultAttrib}</p>
      </div>
    );
  }
}
export default ResultComponent;
