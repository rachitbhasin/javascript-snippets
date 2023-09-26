// snippet to find unique key values in an object
function findKeyValueCount(key, value, obj) {
	var count = 0;
	var keys = Object.keys(obj);
	keys.forEach(function(k) {
		var v = obj[k];
		if(typeof v === 'object') {
			count += findKeyValueCount(key, value, v)
		}
		else if(k === key && v === value) {
			count += 1;
		}
	});
	return count;
}

function isUnique(key, value, obj) {
	return findKeyValueCount(key, value, obj) === 1;
}