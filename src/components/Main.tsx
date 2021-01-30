import React from "react";
import Todo from "./Todo";
import useVisibilityFilter from "../hooks/useVisibilityFilter";
import { activeTodos, completedTodos } from "../selectors/todo";
import type { TTodoAction, TTodos, TVisibilityFilter } from "../types";

interface MainProps {
  todos: TTodos;
  dispatch: React.Dispatch<TTodoAction>;
}

function filterTodos(
  todos: TTodos,
  visibiltyFilter: TVisibilityFilter
): TTodos {
  switch (visibiltyFilter) {
    case "ACTIVE":
      return todos.filter(activeTodos);
    case "COMPLETED":
      return todos.filter(completedTodos);
    default:
      return todos;
  }
}

function Main(props: MainProps) {
  const visibiltyFilter = useVisibilityFilter();
  const todos = filterTodos(props.todos, visibiltyFilter);

  if (props.todos.count() === 0) return null;

  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onChange={(event) =>
          props.dispatch({
            type: "updateAll",
            payload: { completed: event.currentTarget.checked },
          })
        }
        checked={todos.valueSeq().every(completedTodos)}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todos.valueSeq().map((todo) => (
          <Todo key={todo.get("id")} todo={todo} dispatch={props.dispatch} />
        ))}
      </ul>
    </section>
  );
}

export default React.memo(Main);
