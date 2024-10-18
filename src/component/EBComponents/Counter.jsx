import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  if (counter > 5) {
    throw new Error("Counter value exceeds 5!");
  }

  return (
    <div>
      <h3>Counter: &nbsp;{counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>+ 1</button>
    </div>
  );
}
