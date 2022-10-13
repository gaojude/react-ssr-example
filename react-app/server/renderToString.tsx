import React from "react";
import * as ReactDOMServer from "react-dom/server";
import { App } from "../App/App";

export const renderToString = () => {
  return ReactDOMServer.renderToString(<App />);
};
