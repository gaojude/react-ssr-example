import React, { useEffect } from "react";
import { useState } from "react";

function createServerData() {
  let done = false;
  let promise: Promise<void> | null = null;
  return {
    read() {
      if (done) {
        return;
      }
      if (promise) {
        throw promise;
      }
      console.log("Simulating loading data.");

      promise = new Promise((resolve) => {
        setTimeout(() => {
          done = true;
          promise = null;
          resolve();
        }, 2000);
      });
      throw promise;
    },
  };
}

const serverData = createServerData();

function useData() {
  serverData.read();
  return {
    paragraphCopy: "Current Count: ",
    buttonCopy: "Increment Count",
  };
}

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const { paragraphCopy, buttonCopy } = useData();

  return (
    <div>
      <p>
        {paragraphCopy}
        {count}
      </p>
      <button onClick={increment}>{buttonCopy}</button>
    </div>
  );
};
