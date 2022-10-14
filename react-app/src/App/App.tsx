import React, { Suspense } from "react";
import { Counter } from "./Counter";
import styled from "styled-components";
import { times } from "lodash";
import { Delay } from "./Delay";

export const App = () => {
  return (
    <>
      <Suspense>
        <Title>Counter Example with Streaming!!!</Title>
      </Suspense>
      <Suspense>
        {times(10).map((_) => (
          <Delay color="red" />
        ))}
      </Suspense>
      <Suspense>
        {times(10).map((_) => (
          <Delay color="green" />
        ))}
      </Suspense>
      <Suspense>
        {times(10).map((_) => (
          <Delay color="blue" moreContent />
        ))}
      </Suspense>
    </>
  );
};

const Title = styled.div`
  font-size: 30px;
  color: yellow;
`;
