const logger = pram => store => next => action => {
	console.log('logging ', pram);
	next(action);
};

export default logger;
