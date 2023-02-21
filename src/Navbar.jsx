import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { NavContextt } from "./context/NavContext";

function Navbar() {
  const user = useContext(NavContext);

  return (
    <user>
      <div className='App'>
        <h1>Hello {user}</h1>
        <form action=''>
          <input type='text' name='' id='' />
        </form>
      </div>
    </user>
  );
}

export default Navbar;
