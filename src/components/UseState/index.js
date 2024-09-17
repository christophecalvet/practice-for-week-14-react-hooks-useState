import { useState } from "react";
import "./UseState.css";

const UseState = () => {
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);

  return (
    <div className="state" className={theme}>
      <h1>UseState Component</h1>

      <button
        onClick={() => {
          return setTheme("dark");
        }}
      >
        Dark
      </button>

      <button
        onClick={() => {
          return setTheme("light");
        }}
      >
        Light
      </button>

      <h2>{count}</h2>
      <button
        onClick={() => {
          return setCount((prevCount) => prevCount + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          return setCount((prevCount) => prevCount - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default UseState;
