import React, { useContext } from "react";
import { DataContext } from "./DataContext";
import styled from "styled-components";

export const Delay = () => {
  const ctx = useContext(DataContext);
  ctx.read();
  return <DelayedStyle>This is a delayed component.</DelayedStyle>;
};

const DelayedStyle = styled.p`
  color: blue;
  font-size: 40px;
`
