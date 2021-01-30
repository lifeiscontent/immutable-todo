import { OrderedMap } from "immutable";
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import todosReducer from "./reducers/todos";
import { TTodo } from "./types";

function App() {
  const [todos, dispatch] = React.useReducer(todosReducer, OrderedMap<string, TTodo>());

  return (
    <section className="todoapp">
      <Header dispatch={dispatch} />
      <Main todos={todos} dispatch={dispatch} />
      <Footer todos={todos} dispatch={dispatch} />
    </section>
  );
}

export default React.memo(App);
