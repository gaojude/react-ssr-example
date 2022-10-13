import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { App } from "../App/App";

console.log(document.getElementById("app"));
ReactDOMClient.hydrateRoot(document.getElementById("app")!, <App />);
