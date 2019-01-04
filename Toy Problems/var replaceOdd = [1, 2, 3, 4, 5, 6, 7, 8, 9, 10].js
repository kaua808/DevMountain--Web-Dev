var replaceOdd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//result([0, 2, 0, 4, 0, 6, 0, 8, 0, 10])

var replace = function(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 1) {
			arr[i] = "0";
		}
	} return arr;
}

