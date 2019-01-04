//write a function that takes a string as an argument and determines
//whether or not the given string is a palindrome.

//example of a palindrome: Acrobats stab orca (spells the samething backwards)

var string = "race car";

var palindrome = function(str) {
	var string = str.split('').reverse().join('');
	if (string === str) {
		console.log(true);
	} else {
		console.log(false)
	}
}

var palindrome = function(str) {
	var string = str.split(' ').join('').split('').reverse().join('').toLowerCase();
	str = str.split(' ').join('').toLowerCase();
	if (string === str) {
		console.log(true);
	} else {
		console.log(false)
	}
}

function palindrome(str) {
	var string = str.replace(/ /g, '');
	for (var i = 0, j = string.length - 1; i < str.length; i++)
}