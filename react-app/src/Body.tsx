import React from "react";
import { App } from "./App/App";

export const Body = () => {
  return (
    <body>
      <div id="app">
        <App />
      </div>
      <script src="/bundle.js"></script>
    </body>
  );
};
