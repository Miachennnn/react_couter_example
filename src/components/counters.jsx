import React from "react";
import Counter from "./counter";

export default class Counters extends React.Component {
  render() {
    return (
      <div>
        <button className="btn btn-primary m-2" onClick={this.props.onReset}>
          Reset
        </button>
        {this.props.data.map(Result => {
          return (
            <Counter
              key={Result.Id}
              counters={Result}
              onDelete={() => this.props.onDelete(Result.Id)}
              onIncrement={() => this.props.onIncrement(Result)}
            />
          );
        })}
      </div>
    );
  }
}
