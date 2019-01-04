// write a function that generates an array of integers of the fibonaci sequence, 
// up to i = 100, the fibonaci sequence is define by fn = fn1 + fn2, which means 
// to find fn you add the previous two numbers up.  The first two numbers in the 
// sequence are 0 and 1. write a function to check if a given number is in the 
// fibonaci sequence, return 'yes' if it is and 'no' if it is not.

var fibonacci = function() {
var fib = [0, 1]; //Initialize array!
for(var i = 2; i<=11; i++)
{
    // Next fibonacci number = previous + one before previous
    // Translated to JavaScript:
    fib[i] = fib[i-2] + fib[i-1];

}     return fib;
}
 

// you can either check if a given num is in the array with another function. 
// or what you know you can do is just add that check in the function above instead
// of writing a separate function to do that
var num = function (num) {
	fibonacci();
	for (var i = 0; i < fib.length; i++) {
		if (num === fib[i]) {
			return "yes";
		} else {
			return "no";
		}
	};
}

