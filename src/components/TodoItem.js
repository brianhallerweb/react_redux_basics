import React from "react";
import { connect } from "react-redux";
import { removeTodo } from "../Actions/todosActions";

const TodoItem = props => (
  <div>
    {props.todo}
    <button onClick={() => props.dispatch(removeTodo(props.todo))}>X</button>
  </div>
);

export default connect()(TodoItem);
