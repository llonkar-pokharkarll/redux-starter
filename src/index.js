import { bugAdded,  bugResolved, bugAssigned, unResolvedBugs } from "./store/bugs";
import configureStore from "./store/configureStore";

const store = configureStore();
console.log('%cSTORE', 'color: blue; font-size:15px;',store);
const unsubscribe = store.subscribe(() => {
  console.log('%cSTORE_CHANGED', 'color: blue; font-size:15px;', store.getState());
});

// import store from "./customStore";
// import * as actions from "./actions";

store.dispatch(bugAdded({description:'BUG 1'}));
store.dispatch(bugAdded({description:'BUG 2'}));
store.dispatch(bugAdded({description:'BUG 3'}));

store.dispatch(bugAssigned({id:1,assigned:"AP"}));
store.dispatch(bugResolved({id:1}));
store.dispatch(bugAssigned({id:2,assigned:"OP"}));
store.dispatch(bugAssigned({id:3,assigned:"GP"}));
// store.dispatch(bugRemoved({id:1}));
// store.subscribe(() => {
  // console.log('%cSTORE_CHANGED', 'color: blue; font-size:15px;');
  // });
  // unsubscribe();
  // store.dispatch(bugRemoved(1));
  
  // console.log('%cSTORE_CHANGED', 'color: blue; font-size:15px;', store.getState());
  console.log('%cGET_STATE', 'color: blue; font-size:15px;', store.getState());

console.log('%cGET_UNRESOLVED_BUGS', 'color: blue; font-size:15px;', );