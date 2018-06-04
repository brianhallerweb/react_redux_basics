export function addTodo(todo) {
  return {
    type: "ADD_TODO",
    todo
  };
}

export function removeTodo(todoText) {
  return {
    type: "REMOVE_TODO",
    todoText
  };
}
