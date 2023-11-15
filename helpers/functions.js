export function isEmpty(value) {
	for (let prop in value) {
		if (value.hasOwnProperty(prop)) return false;
	}
	return true;
}
