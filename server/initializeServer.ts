// import { renderToString } from "../react-app/server-specific/renderToString";
import { expressApp } from "./expressApp";
import express from "express";
import path from "path";
import { renderToPipeableStream } from "../react-app/server-specific/renderToPipeableStream";

export const initializeServer = () => {
  // NOTE!! we're assuming the "views" is placed in the same directory as the current file
  const dirname = __dirname
    .split("/")
    .filter((segment) => segment !== "dist")
    .join("/");

  expressApp.set("views", path.join(dirname, "views"));
  expressApp.set("view engine", "hbs");

  expressApp.use(express.static("public"));

  expressApp.get("/", (req, res) => {
//     SSR Code
//     res.render("index", {
//       body: renderToString(),
//     });

//     SSR with streaming code
      const stream = renderToPipeableStream({
          onShellReady() {
              res.statusCode = 200;
              res.setHeader("Content-type", "text/html");
              stream.pipe(res);
          }
      });
  });
};
