//write a function called finder that accepts two parameters,
//the first one is a string and the second is an array.
//have your function return true if the string is found in the array and false if its not.


var nums = ["hello", "javascript", "awesome"]

var finder = function(string, arr) {
	for (var i = 0; i < arr.length; i++) {
		if (string === arr[i]) {
			return true;
		} else {
			return false;
		}
	}
}	

// OR

var finder = function(string, arr) {
	for (var i = 0; i < arr.length; i++) {
		if (string === arr[i]) {
			return true;
		} 
	} return false;
}	


finder("hello", nums); //returns true.
finder("lame", nums);  //returns false.