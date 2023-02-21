import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./Navbar";
import { NavContextt } from "./context/NavContext";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Inc, Dec } from "./state/reducer";

function App() {
  const curState = useSelector(state => state.Number);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  return (
    // <NavContextt>
    //   <div className='App'>
    //     <h1>Hello World</h1>
    //     <Navbar />
    //   </div>
    // </NavContextt>

    <div>
      <button onClick={() => dispatch(Inc(10))}>inc</button>
      <h1>{curState}</h1>

      <button onClick={() => dispatch(Dec(5))}>Dec</button>
    </div>
  );
}

export default App;
