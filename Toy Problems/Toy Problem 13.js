// write a function that accepts a multi dimensional array and returns a flattened version var flatten = function(arr) {


var array = [1, 2 [3, [4], 5, 6], 7];

 var merged = [].concat.apply([], arr);
    return merged
}

console.log(flatten(arr));

var array = [1, 2, [3, [4], 5, 6], 7];

var flatten = function(arr, newArr) {
	if(!newArr) {
		newArr = [];
	}
	for(var i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			flatten(arr[i], newArr);
		}
		else {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

flatten(array);


