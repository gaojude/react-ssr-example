import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { App } from "../src/App/App";

ReactDOMClient.hydrateRoot(document.getElementById("app")!, <App />);
