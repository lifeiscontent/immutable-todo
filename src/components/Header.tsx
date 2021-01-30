import React, { useState } from "react";
import type { TTodoAction } from "../types";

interface HeaderProps {
  dispatch: React.Dispatch<TTodoAction>;
}

function Header(props: HeaderProps) {
  const [value, setValue] = useState("");

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        value={value}
        onChange={(event) => {
          setValue(event.currentTarget.value);
        }}
        onKeyDown={(event) => {
          if (value.trim() !== "" && event.key === "Enter") {
            props.dispatch({ type: "create", payload: { text: value } });
            setValue("");
          }
        }}
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
      />
    </header>
  );
}

export default React.memo(Header);
