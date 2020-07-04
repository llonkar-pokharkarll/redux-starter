import { configureStore } from "@reduxjs/toolkit";
import reducer from "./bugs";

export default function () {
  const store = configureStore({
    reducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // devToolsEnhancer({trace:true})
  });
  return store;
}

