
class Observer {
	constructor(events) {
		this.ev = this.createEventsObjects(events)
	}
	
	createEventsObjects(events) {
		return Object.values(events).reduce(
			(acc, value) => {
				if (!acc[value]) {
					acc = { ...acc, [value]: [] }
				}
				return acc;
			}, 
			{}
		)
	}

	subscribe(event, callback) {
		if (!this.ev[event]) {
			this.ev[event] = [];
		}

		this.ev[event].push(callback);

		return () => this.unsubscribe(event, callback)
	}

	unsubscribe(event, callback) {
		if (!this.ev[event]) return;

		this.ev[event] = this.ev[event].filter(
			cb => cb !== callback
		);
	}

	publish(event, ...args) {
		if (!this.ev[event]) return;
		this.ev[event].forEach(cb => cb(...args));
	}
}

export default Observer;