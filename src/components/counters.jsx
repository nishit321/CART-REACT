import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    console.log(counters);
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
    //  counters[index].value++;
  };
  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    console.log("Event Handle Occue");
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  render() {
    return (
      <div>
        <button className="btn btn-primary m-2" onClick={this.handleReset}>
          Reset
        </button>
        {this.state.counters.map(map => (
          // value and selected property pass to counter components as a arguenment
          <Counter
            key={map.id}
            value={map.value}
            selected={true}
            onDelete={this.handleDelete}
            id={map.id}
            onIncrement={this.handleIncrement}
            counters={map}
          >
            <h1>Counter {map.id}</h1>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
