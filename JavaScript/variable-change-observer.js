// Observe changes to a variable

class Observable {
	constructor(value) {
		this.function = () => {};
		this._value = value;
		this.oldValue = null;
	}

	set value(value) {
		console.log(value);
		this.oldValue = this._value;
		this._value = value;
		this.function();
	}

	get value() {
		return this._value;
	}

	onChange(func) {
		this.function = func;
	}
}
const watcher = new Observable(10);

watcher.onChange(() => {
	console.log(`I changed from ${watcher.oldValue} to ${watcher.value}`);
});

watcher.value = 23;
