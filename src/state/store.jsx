import { configureStore } from "@reduxjs/toolkit";
import incdecReducer from "./reducer/index";

export default configureStore(
  {
    reducer: {
      Number: incdecReducer,
    },
  },
  window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
);
