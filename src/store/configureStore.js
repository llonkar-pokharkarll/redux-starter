import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './bugs';
import logger from './middleware/logger';

export default function() {
	const store = configureStore({
		reducer,
		middleware: [ ...getDefaultMiddleware(), logger({ description: 'console' }) ],
		// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
		// devToolsEnhancer({trace:true})
	});
	return store;
}
