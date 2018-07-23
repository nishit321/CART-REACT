import React, { Component } from "react";
import Navbar from "./navbar";
import Counters from "./counters";

class app extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <main className="container">
          <Counters />
        </main>
      </div>
    );
  }
}

export default app;
