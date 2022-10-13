import { renderToString } from "../react-app/server/renderToString";
import { expressApp } from "./expressApp";
import express from "express";
import path from "path";

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
    res.render("index", {
      body: renderToString(),
    });
  });
};
