import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { observable, configure, action } from "mobx";

import reportWebVitals from "./reportWebVitals";
import { PupperStoreProvider } from "src/Contexts/PupperStoreContext";

configure({ enforceActions: "always" });
ReactDOM.render(
  <React.StrictMode>
    <PupperStoreProvider>
      <App />
    </PupperStoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
