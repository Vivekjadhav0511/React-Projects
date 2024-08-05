import "./App.css";
import Home from "./Component/Home";

import Navbar from "./Component/Navbar";

function App() {
  return (
    <>
      <div className=" Container  h-screen w-full scroll-smooth">
       <Navbar/>
       <Home/>
      </div>
    </>
  );
}

export default App;
