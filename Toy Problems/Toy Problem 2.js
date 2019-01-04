var firstNames = ["Kaleo", "Arron", "Gordon", "Roy"];
var lastNames= ["Kim", "Aaron", "Liljinquest", "Matsunaga"];




//make a function called combinator that take two arrays as arguments.
//


var combinator = function (arr1, arr2) {
	var newArr = [];
	for (var i = 0; i < arr1.length i++) {
		newArr.push(arr1[i] + " " + arr2[i]);
	} return newArr;
}






var combinator = function(arr1, arr2) {
	for (var i = 0; i < arr1.length; i++) {
		for (var j = 0; < arr2.length; i++) {
			combo = arr1[i].join(arr2[j]);
		}
	} return combo;
};

combinator(firstNames, lastNames);