import React from "react";

export const Counter = ({ value }) => {
  let [count, setCount] = React.useState(value);
  const increment = () => {
    count++;
    setCount(count);
  };
  const decrement = () => {
    count--;
    setCount(count);
  };
  return (
    <div>
      <h1>Conter</h1>
      <h2>{count}</h2>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
      <button onClick={() => setCount(count * 2)}>Double</button>
    </div>
  );
};
