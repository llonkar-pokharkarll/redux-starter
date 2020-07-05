import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

// actionCreators
// export const bugAdded = createAction("bugAdded");
//
// export const bugRemoved = createAction("bugRemoved");
//
// export const bugResolved = createAction("bugResolved");

//reducer

let id_Count = 0;

// const reducer = (state=[], action={}) => {
//   if (action.type === bugAdded.type) {
//     return [
//       ...state,
//       {
//         id: ++id_Count,
//         description: action.payload.description,
//         resolved: false,
//       }
//     ];
//   } else if (action.type === bugRemoved.type) {
//     return state.filter((bug) => bug.id !== action.payload.id);
//   } else if (action.type === bugResolved.type) {
//     return state.map((bug) => (bug.id !== action.payload.id) ? bug : {
//       ...bug,
//       resolved: true,
//     });
//   }
// };
const slice = createSlice({
	name: 'bugs',
	initialState: [],
	reducers: {
		bugAdded: (bugs, action) => {
			bugs.push({
				id: ++id_Count,
				description: action.payload.description,
				resolved: false,
				assigned: '',
			});
		},
		bugResolved: (bugs, action) => {
			const index = bugs.findIndex((bug) => bug.id !== action.payload.id);
			bugs[index].resolved = true;
		},
		bugAssigned: (bugs, action) => {
			const index = bugs.findIndex((bug) => bug.id === action.payload.id);
			bugs[index].assigned = action.payload.assigned;
		},
	},
});

// const reducer = createReducer([],{
//   [bugAdded.type] : (bugs,action) => {
//     bugs.push({
//         id: ++id_Count,
//         description: action.payload.description,
//         resolved: false,
//     });
//   },
//   [bugResolved.type] : (bugs,action) => {
//     const index = bugs.findIndex((bug) => bug.id !== action.payload.id);
//     bugs[index].resolved = true;
//   },
// });
export const { bugAdded, bugResolved, bugAssigned } = slice.actions;
export default slice.reducer;

//selector && memoization
export const unResolvedBugs = createSelector(
	(state) => state,
	(bugs) => bugs.filter((bug) => !bug.resolved),
);
