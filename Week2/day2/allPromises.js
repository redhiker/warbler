var promises = [
	timedPromise(100,'hi'),
	timedPromise(500, 'ho'),
	timedPromise(300, 'he')

];

var p  = Promise.race(promises);

p.then(
	(val) => {
		console.log('done', val);
	}
);