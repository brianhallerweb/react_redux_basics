const todoReducerDefaultState = { todos: [] };

function todoReducer(state = todoReducerDefaultState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: state.todos.concat(action.todo)
      };
    case "REMOVE_TODO":
      return {
        todos: state.todos.filter(todo => todo !== action.todoText)
      };
    default:
      return state;
  }
}

export default todoReducer;
