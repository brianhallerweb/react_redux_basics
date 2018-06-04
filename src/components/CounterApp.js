import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../Actions/counterActions";

const CounterApp = props => (
  <div>
    <div>Counter App</div>
    <button onClick={() => props.dispatch(increment())}>+</button>
    <h3>{props.count}</h3>
    <button onClick={() => props.dispatch(decrement())}>-</button>
  </div>
);

const mapStateToProps = state => ({
  count: state.count.count
});

export default connect(mapStateToProps)(CounterApp);
