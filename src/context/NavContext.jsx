import React, { createContext } from "react";
import Navbar from "../Navbar";

export const NavContext = createContext();

export const NavContextt = ({ children }) => {
  return (
    <div>
      <NavContext.Provider value='Reed'>{children}</NavContext.Provider>
    </div>
  );
};
