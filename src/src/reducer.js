import * as actions from "./actionTypes";
let id_Count = 0;
const reducer = (state=[], action={}) => {
if (action.type === actions.BUG_ADDED) {
    return [
      ...state,
      {
        id: ++id_Count,
        description: action.payload.description,
        resolved: false,
      }
    ];
  } else if (action.type === actions.BUG_REMOVED) {
    return state.filter((bug) => bug.id !== action.payload.id);
  } else if (action.type === actions.BUG_RESOLVED) {
    return state.map((bug) => (bug.id !== action.payload.id) ? bug : {
      ...bug,
      resolved: true,
    });
  }
};

export default reducer;
