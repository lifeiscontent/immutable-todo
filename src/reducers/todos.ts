import TodoRecord from "../records/TodoRecord";
import { activeTodos } from "../selectors/todo";
import type { TTodoAction, TTodos } from "../types";
import { createGUID } from "../utils";

function updateTodo(
  state: TTodos,
  id: string,
  patch: Partial<{ id?: string; completed?: boolean; text?: string }>
): TTodos {
  const todo = state.get(id);
  if (todo) {
    return state.set(id, todo.merge(patch));
  }
  return state;
}

export default function todosReducer(state: TTodos, action: TTodoAction) {
  if (action.type === "create") {
    const id = createGUID();
    return state.set(
      id,
      TodoRecord({
        id,
        text: action.payload.text,
      })
    );
  } else if (action.type === "update") {
    return updateTodo(state, action.payload.id, action.payload);
  } else if (action.type === "clearCompleted") {
    return state.filter(activeTodos);
  } else if (action.type === "updateAll") {
    for (let key of Array.from(state.keys())) {
      state = updateTodo(state, key, action.payload);
    }

    return state;
  } else if (action.type === "delete") {
    return state.remove(action.payload.id);
  }

  return state;
}
