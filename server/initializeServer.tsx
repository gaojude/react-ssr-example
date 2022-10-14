// import { renderToString } from "../react-app/server-specific/renderToString";
import { expressApp } from "./expressApp";
import express from "express";
import path from "path";
import { renderToPipeableStream } from "../react-app/server-specific/renderToPipeableStream";
import { renderToString } from "../react-app/server-specific/renderToString";
import { App } from "../react-app/src/App/App";
import React from "react";
import { ServerStyleSheet } from "styled-components";
import { renderToNodeStream } from "react-dom/server";
import * as ReactDOMServer from "react-dom/server";
import * as stream from "stream";
import { renderToStream } from "../react-app/server-specific/renderToStream";
import { Body } from "../react-app/src/Body";
import { DataContext } from "../react-app/src/App/DataContext";

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
    const sheet = new ServerStyleSheet()
    const stream = ReactDOMServer.renderToPipeableStream(
      sheet.collectStyles(
      <DataContext.Provider value={createServerData()}>
        <Body />
      </DataContext.Provider>),
      {
        onShellReady: () => {
          res.write(sheet.getStyleTags())
          stream.pipe(res);
        },
        onAllReady: () => {
          res.write(sheet.getStyleTags())
        }
      }
    );
  });
};

function createServerData() {
  let done = false;
  let promise: Promise<void> | null = null;
  return {
    read() {
      if (done) {
        return;
      }
      if (promise) {
        throw promise;
      }
      console.log("Simulating loading data.");

      promise = new Promise((resolve) => {
        setTimeout(() => {
          done = true;
          promise = null;
          resolve();
        }, 3000);
      });
      throw promise;
    },
  };
}
