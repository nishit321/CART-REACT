import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button className="btn btn-primary m-2" onClick={onReset}>
          Reset
        </button>
        {counters.map((map, index) => (
          // value and selected property pass to counter components as a arguenment
          <Counter
            key={map.id}
            value={map.value}
            selected={true}
            onDelete={onDelete}
            id={map.id}
            onIncrement={onIncrement}
            counters={map}
            index={index}
          >
            <h1>Counter {map.id}</h1>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
