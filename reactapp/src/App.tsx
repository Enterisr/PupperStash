import React from "react";
import logo from "./logo.svg";
import "./App.style.js";
import Main from "./components/Main/Main";
import { observer } from "mobx-react-lite";
function App(props: any) {
  return <Main />;
}

export default observer(App);
