import React, { useContext } from "react";
import { DataContext } from "./DataContext";

export const Delay = () => {
  const ctx = useContext(DataContext);
  ctx.read();
  return <div>This is a delayed component.</div>;
};
