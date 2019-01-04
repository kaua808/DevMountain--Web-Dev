//write a function that takes an array and returns a even number that occurs twice



var nums = [1, 2, 3, 4, 4, 5, 6];


var eveOccureance = function(arr) {
	for (var i = 0; i < arr.length; i++) {
		var occurs = 0
		for (var j = 0; j < arr.length; j++) {
			if (arr[i] = arr[j]) {
				occurs++
			}
		}
	} if (occurs % 2 === 0) {
		return arr[i]
	}
}


function evener(arr) {
	var track = {};
	for (var i = 0; i < arr.length; i++) {
		if (!track[arr[i]]) {
			track[arr[i]] = 0;
		}
		track(arr[i]) += 1;
	}
	for (var key in track) {
		if(!(track[key] % 2)) {
			return [key]
		}
	}
}