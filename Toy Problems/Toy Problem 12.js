// create a function that takes in three strings as a parameter. 
// the goal is to swap all x characters in te string for y charactoers.
// i.e.   swapper('some string', 's', 'z')  // returns => 'zome ztring'


var swapper = function(string, a, b) {
	string = string.split("");
	for (var i = 0; i < string.length; i++) {
		if (string[i] === a) {
			string[i] = b;
		}
	} return string.join("");
}

swapper('kaleo', 'k', 't');


var swapper = function(string, a, b) {
	string = string.split("");
	for (var i = 0; i < string.length; i++) {
		if (string[i] === a) {
			string.splice(i, 1, b);
		}
	} return string.join("");
}

//recursive solution

var replace = function(str, orgnl, a, b) {
	if (str.length === 0) return '';
	if (str[0] === a) str = b + str.slice(1);
	return str[0] + replace(str.slice(1)), a, y
}