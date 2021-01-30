import React from "react";
import type { TTodoAction, TTodo } from "../types";
import clsx from "clsx";

interface TodoProps {
  todo: TTodo;
  dispatch: React.Dispatch<TTodoAction>;
}

function Todo(props: TodoProps) {
  const id = props.todo.get("id");
  const text = props.todo.get("text");
  const completed = props.todo.get("completed");
  const editInputRef = React.useRef<HTMLInputElement>(null);
  const [editing, setEditing] = React.useState(false);

  React.useEffect(() => {
    if (editing && editInputRef.current) {
      editInputRef.current.focus();
      editInputRef.current.setSelectionRange(
        editInputRef.current.value.length,
        editInputRef.current.value.length
      );
    }
  }, [editing]);

  return (
    <li
      className={clsx({
        completed,
        editing,
      })}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={(event) => {
            props.dispatch({
              type: "update",
              payload: {
                completed: event.currentTarget.checked,
                id,
                text,
              },
            });
          }}
        />
        <label
          onDoubleClick={() => {
            setEditing(!editing);
          }}
        >
          {text}
        </label>
        <button
          className="destroy"
          onClick={(event) => {
            props.dispatch({ type: "delete", payload: { id } });
          }}
        ></button>
      </div>
      <input
        ref={editInputRef}
        className="edit"
        defaultValue={text}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            setEditing(false);
            props.dispatch({
              type: "update",
              payload: { id, text: event.currentTarget.value },
            });
          } else if (event.key === "Escape") {
            setEditing(false);
            event.currentTarget.value = text;
          }
        }}
        onBlur={(event) => {
          setEditing(false);
          props.dispatch({
            type: "update",
            payload: { id, text: event.currentTarget.value },
          });
        }}
      />
    </li>
  );
}

export default React.memo(Todo);
