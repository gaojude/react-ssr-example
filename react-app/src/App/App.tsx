import React, { Suspense } from "react";
import { Counter } from "./Counter";
import styled from "styled-components";

export const App = () => {
  return (
    <>
      <Title>Counter Example with Streaming!!!</Title>
      <Suspense>
        <Counter />
      </Suspense>
    </>
  );
};

const Title = styled.div`
  font-size: 30px;
  color: yellow;
`;
