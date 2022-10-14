// import { renderToString } from "../react-app/server-specific/renderToString";
import { expressApp } from "./expressApp";
import express from "express";
import path from "path";
import { renderToPipeableStream } from "../react-app/server-specific/renderToPipeableStream";
import { renderToString } from "../react-app/server-specific/renderToString";
import { App } from "../react-app/src/App/App";
import React, { ReactNode } from "react";
import { ServerStyleSheet } from "styled-components";
import { renderToNodeStream } from "react-dom/server";
import * as ReactDOMServer from "react-dom/server";
import * as stream from "stream";
import { renderToStream } from "../react-app/server-specific/renderToStream";
import { Body } from "../react-app/src/Body";
import { DataContext } from "../react-app/src/App/DataContext";
import { EchoStream } from "./utils/EchoStream";

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
    const sheet = new ServerStyleSheet();
    const echoStream = new EchoStream();

    const generatedStyles = new Set();

    const styleElements = new Set<ReactNode>();

    const processedTags = new Set<string>();

    // const destination = res;
    const destination = res;

    const writeStyle = () => {
      const _tags = sheet.getStyleTags();

      // TODO: may be able to de-hack this if we change styled components
      const tags = _tags
        .slice(`<style data-styled="true" data-styled-version="5.3.6">`.length)
        .slice(0, -`</style>`.length);

      let final = "";

      tags.split("\n").forEach((tag) => {
        if (!processedTags.has(tag)) {
          processedTags.add(tag);
          final += tag + "\n";
        }
      });

      if (final.length > 0) {
        destination.write(`<style>${final}</style>`);
      }
    };

    const stream = ReactDOMServer.renderToPipeableStream(
      sheet.collectStyles(
        <DataContext.Provider value={createServerData()}>
          <Body />
        </DataContext.Provider>
      ),
      {
        onShellReady: () => {
          writeStyle();
          stream.pipe(destination);
        },
        onFlushingChunk: (b: any) => {
          console.log("on flushing boundary component");
          writeStyle();
        },
      } as any
    );

    // destination.sendStatus(200)
  });
};

function createServerData() {
  let done = false;
  let promise: Promise<void> | null = null;

  let done2 = false;
  let promise2: Promise<void> | null = null;
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
    // TODO: write it less dry!
    slowRead() {
      if (done2) {
        return;
      }
      if (promise2) {
        throw promise2;
      }
      console.log("Simulating loading data.");

      promise2 = new Promise((resolve) => {
        setTimeout(() => {
          done2 = true;
          promise2 = null;
          resolve();
        }, 6000);
      });
      throw promise2;
    },
  };
}
