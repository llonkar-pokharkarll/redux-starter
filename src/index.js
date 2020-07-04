import { bugAdded, bugResolved, bugAssigned, unResolvedBugs } from './store/bugs';
import configureStore from './store/configureStore';

const store = configureStore();
console.log('%c STORE', 'color: blue; font-size:15px;', store);
const unsubscribe = store.subscribe(() => {
	console.log('%cSTORE_CHANGED', 'color: blue; font-size:15px;', store.getState());
});

// action add bugs
// store.dispatch(bugAdded({ description: 'BUG 1' }));
// store.dispatch(bugAdded({ description: 'BUG 2' }));
// store.dispatch(bugAdded({ description: 'BUG 3' }));

store.dispatch(() => {
	store.dispatch(bugAdded({ description: 'BUG 1' }));
});

// store.dispatch(bugAssigned({ id: 1, assigned: 'AP' }));
// store.dispatch(bugResolved({ id: 1 }));
// store.dispatch(bugAssigned({ id: 2, assigned: 'OP' }));
// store.dispatch(bugAssigned({ id: 3, assigned: 'GP' }));

// console.log('%c GET_STATE', 'color: blue; font-size:15px;', store.getState());
// console.log('%c GET_UNRESOLVED_BUGS', 'color: blue; font-size:15px;');
