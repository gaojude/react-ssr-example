import React, { Suspense } from "react";
import { Counter } from "./Counter";
import styled from "styled-components";
import { times } from "lodash";
import { Delay } from "./Delay";

export const App = () => {
  return (
    <>
      <Title>Counter Example with Streaming!!!</Title>
      {/*<Suspense>*/}
      {/*  {times(100).map((i) => (*/}
      {/*    <Counter key={i} />*/}
      {/*  ))}*/}
      {/*</Suspense>*/}
      <Suspense>
        <Delay />
      </Suspense>
    </>
  );
};

const Title = styled.div`
  font-size: 30px;
  color: yellow;
`;
