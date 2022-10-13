import React from "react";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={increment}>Increment Count</button>
    </div>
  );
};
