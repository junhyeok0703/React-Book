import React, { useReducer } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { value: state.value + 1 };
    case "MI":
      return { value: state.value - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <div>
      <p>{state.value}</p>
      <button
        onClick={() => {
          dispatch({ type: "ADD" });
        }}
      >
        플러스
      </button>
      <button
        onClick={() => {
          dispatch({ type: "MI" });
        }}
      >
        마이너스
      </button>
    </div>
  );
};

export default Counter;
