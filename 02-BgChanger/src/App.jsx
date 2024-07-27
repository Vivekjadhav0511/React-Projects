import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setcolor] = useState("olive");
  return (
    <>
      <div className="h-screen w-full m-2 " style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <div className="fixed flex flex-wrap justify-center bottom-12 gap-12">
            <button
              onClick={() => setcolor("yellow")}
              className="px-4 py-2 rounded-md "
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => setcolor("#FF0000")}
              className="px-4 py-2 rounded-md  text-white"
              style={{ backgroundColor: "#FF0000" }}
            >
              Red
            </button>
            <button
              onClick={() => setcolor("blue")}
              className="px-4 py-2 rounded-md text-white"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setcolor("black")}
              className="px-4 py-2 rounded-md  text-white"
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
