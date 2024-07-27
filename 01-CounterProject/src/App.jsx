import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function Increment() {
    if (count >= 10) {
      count;
    } else {
      setCount(count + 1);
    }
  }

  function Decrement() {
    if (count <= 0) {
      count;
    } else {
      setCount(count - 1);
    }
  }

  return (
    <>
      <div className=" p-10 px-24 my-24 border border-black">
        <p> Counter :- {count} </p>
        <div className="p-11 ">
          <button
            className="m-4 border border-black black p-4"
            onClick={Increment}
          >
            Increment +
          </button>
          <button className=" border border-black m-4 p-4" onClick={Decrement}>
            {" "}
            Decrement -{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
