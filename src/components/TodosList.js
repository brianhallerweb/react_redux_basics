import React from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";

const TodosList = props => (
  <div>{props.todos.map(todo => <TodoItem key={todo} todo={todo} />)}</div>
);

const mapStateToProps = state => ({
  todos: state.todos.todos
});

export default connect(mapStateToProps)(TodosList);
