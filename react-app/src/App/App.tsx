import React, { Suspense } from "react";
import { Counter } from "./Counter";

export const App = () => {
  return (
    <div>
      <h1>Counter Example with Streaming!!!</h1>
      <Suspense>
        <Counter />
      </Suspense>
    </div>
  );
};
