import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import {initialState} from "./components/context/initialstate"

import reducer from "./components/context/reducer"

import { BrowserRouter as Router } from "react-router-dom";
import { StateProvider } from "./components/context/StateProvider";

ReactDOM.render(

  <Router>

  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>

  </Router>

, document.getElementById("root"))