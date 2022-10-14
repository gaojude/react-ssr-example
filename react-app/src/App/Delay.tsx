import React, { useContext } from "react";
import { DataContext } from "./DataContext";
import styled from "styled-components";

export const Delay: React.FC<{
  color: string;
  moreContent?: boolean;
}> = ({ color, moreContent }) => {
  const ctx = useContext(DataContext);
  if (moreContent) {
    ctx.slowRead();
  } else {
    ctx.read();
  }
  return (
    <>
      <DelayedStyle color={color}>This is a delayed component.</DelayedStyle>
      {moreContent && <MoreContent />}
    </>
  );
};

const DelayedStyle = styled.p<{
  color: string;
}>`
  color: ${(props) => props.color};
  font-size: 40px;
`;

const MoreContent = styled.div`
  color: red;
`;
