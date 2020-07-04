import  reducer  from "./reducer";
import * as actions from "./actions";

function customStore(reducer) {
  let state;
  let listeners = [];

  function subscribe(listener) {
    listeners.push(listener);
  }

  function dispatch(actions) {
    state = reducer(state, actions);

    for (let i = 0; i < listeners.length; i++) {
      listeners[i]();

    }
  }

  function getState() {
    return state;
  }


  return {
    dispatch,
    getState,
    subscribe
  };
}

export default customStore(reducer);
