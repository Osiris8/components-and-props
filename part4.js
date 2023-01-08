import React from "react";
import ReactDOM from "react-dom";

class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}!</h1>;
  }
}

ReactDOM.render(
  <Greeting firstName="Osiris" />,
  document.getElementById("app")
);

/* Result
Hi there, Osiris!
*/
