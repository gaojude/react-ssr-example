import React from "react";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      <h1>Jude's Counter Example</h1>
      <p>Current Count: {count}</p>
      <button onClick={increment}>Increment Count</button>
    </div>
  );
};
