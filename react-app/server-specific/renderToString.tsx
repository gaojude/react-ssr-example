import React, { ReactNode } from "react";
import * as ReactDOMServer from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import { Body } from "../src/Body";

export const renderToString = (): {
  bodyString: string;
  styleString: string;
} => {
  const sheet = new ServerStyleSheet();
  const bodyString = ReactDOMServer.renderToString(
    sheet.collectStyles(<Body />)
  );
  const styleString = sheet.getStyleTags();
  return { bodyString, styleString };
};
