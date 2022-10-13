import React from "react";
import * as ReactDOMServer from "react-dom/server";
import { RenderToPipeableStreamOptions } from "react-dom/server";
import { App } from "../src/App/App";

export const renderToPipeableStream = (
  options?: RenderToPipeableStreamOptions
) => {
  return ReactDOMServer.renderToPipeableStream(
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Streaming</title>
      </head>
      <body>
        <div id="app">
          <App />
        </div>
        <script src="/bundle.js"></script>
      </body>
    </html>,
    options
  );
};
