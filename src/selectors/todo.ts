import { TTodo } from "../types";

export function completedTodos(todo: TTodo) {
  return todo.get("completed");
}

export function activeTodos(todo: TTodo) {
  return !todo.get("completed");
}
