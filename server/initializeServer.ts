// import { renderToString } from "../react-app/server-specific/renderToString";
import { expressApp } from "./expressApp";
import express from "express";
import path from "path";
import { renderToPipeableStream } from "../react-app/server-specific/renderToPipeableStream";
import { renderToString } from "../react-app/server-specific/renderToString";

export const initializeServer = () => {
  // NOTE!! we're assuming the "views" is placed in the same directory as the current file
  const dirname = __dirname
    .split("/")
    .filter((segment) => segment !== "dist")
    .join("/");

  expressApp.set("views", path.join(dirname, "views"));
  expressApp.set("view engine", "hbs");

  expressApp.use(express.static("public"));

  expressApp.get("/ssr", (req, res) => {
    const { bodyString, styleString } = renderToString();
    res.render("index", {
      style: styleString,
      body: bodyString,
    });
  });

  expressApp.get("/stream", (req, res) => {
    const stream = renderToPipeableStream({
      onShellReady() {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        stream.pipe(res);
      },
    });
  });
};
