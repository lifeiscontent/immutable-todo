import React from "react";
import useVisibilityFilter from "../hooks/useVisibilityFilter";
import { activeTodos } from "../selectors/todo";
import type { TTodoAction, TTodos } from "../types";

interface FooterProps {
  todos: TTodos;
  dispatch: React.Dispatch<TTodoAction>;
}

function Footer(props: FooterProps) {
  const visibiltyFilter = useVisibilityFilter();
  const count = props.todos.count(activeTodos);

  if (props.todos.count() === 0) return null;

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{count}</strong> {count === 1 ? "item" : "items"} left
      </span>
      <ul className="filters">
        <li>
          <a
            className={visibiltyFilter === "ALL" ? "selected" : undefined}
            href="#/"
          >
            All
          </a>
        </li>
        <li>
          <a
            className={visibiltyFilter === "ACTIVE" ? "selected" : undefined}
            href="#/active"
          >
            Active
          </a>
        </li>
        <li>
          <a
            className={visibiltyFilter === "COMPLETED" ? "selected" : undefined}
            href="#/completed"
          >
            Completed
          </a>
        </li>
      </ul>
      <button
        className="clear-completed"
        onClick={() => {
          props.dispatch({ type: "clearCompleted" });
        }}
      >
        Clear completed
      </button>
    </footer>
  );
}

export default React.memo(Footer);
