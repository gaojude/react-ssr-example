import React, { useEffect } from "react";
import { useState } from "react";

function useData() {
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
