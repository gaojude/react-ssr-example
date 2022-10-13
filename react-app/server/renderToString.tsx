import React from "react";
import * as ReactDOMServer from "react-dom/server";
import { App } from "../src/App/App";

export const renderToString = () => {
  return ReactDOMServer.renderToString(<App />);
};
