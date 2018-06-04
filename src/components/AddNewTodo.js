import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../Actions/todosActions";

const AddNewTodo = props => (
  <div>
    <form
      onSubmit={e => {
        e.preventDefault();
        props.dispatch(addTodo(e.target.elements.todo.value));
        e.target.elements.todo.value = "";
      }}
    >
      <input type="text" name="todo" />
      <button>Add</button>
    </form>
  </div>
);

export default connect()(AddNewTodo);
