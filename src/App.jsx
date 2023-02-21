import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./Navbar";
import { NavContextt } from "./context/NavContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <NavContextt>
      <div className='App'>
        <h1>Hello World</h1>
        <Navbar />
      </div>
    </NavContextt>
  );
}

export default App;
