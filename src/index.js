import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Counters from "./components/counters";
import App from "./components/app";
import { BrowserRouter, Route, Link } from "react-router-dom";

class Hello extends React.Component {
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}
class World extends React.Component {
  render() {
    return <h1>World </h1>;
  }
}
class Helloworld extends React.Component {
  render() {
    return (
      <section>
        <Hello name="Nishit Shah" />
        <World />
      </section>
    );
  }
}
ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/app" component={App} />
      <Route path="/helloworld" component={Helloworld} />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
