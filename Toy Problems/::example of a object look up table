//example of a object look up table

var deleter = function(arr) {
	var track = {};
	for(var i = 0; i < arr.length; i++) {
		if(track[arr[i]]) {
			arr.splice(i, 1);
		} else {
		track[arr[i]] = true;
		}
	}
}