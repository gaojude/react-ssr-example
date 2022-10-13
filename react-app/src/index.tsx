import React, { ReactElement } from "react";
import { Body } from "./Body";

export const Index: React.FC<{
  styles?: ReactElement[];
}> = ({ styles }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Streaming</title>
        {styles}
      </head>
      <Body />
    </html>
  );
};
