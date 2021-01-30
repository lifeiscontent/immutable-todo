import React from "react";
import ReactDOM from "react-dom";
import "todomvc-common/base.css";
import "todomvc-app-css/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <footer className="info">
      <p>Double-click to edit a todo</p>
      <p>
        Template by <a href="http://sindresorhus.com">Sindre Sorhus</a>
      </p>
      <p>
        Created by <a href="http://todomvc.com">you</a>
      </p>
      <p>
        Part of <a href="http://todomvc.com">TodoMVC</a>
      </p>
    </footer>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
