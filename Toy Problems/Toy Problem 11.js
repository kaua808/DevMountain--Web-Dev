// write a function that accepts a number, n, and returns the nth fibonacci number.
// Use a reursive solution to this probem; if you finish with time left over,
// implement an iterative solution.
//*nth(2); // => 2
//*nth(3); // => 3
//*nth(5); // => 5

var nth = function(n) {
	var fib = [0, 1];
		for(var i = 2; i <= 11; i++) {
   			fib[i] = fib[i-2] + fib[i-1];
		} 
		
	}
 

 iterative solution
var fibonacci = function(n) {
	var sum = 0;
	var num1 = 0;
	var num2 = 1;
	for (var i = 0; i < n; i++) {
		sum = num1 + num2;
		num1 = num2;
		num2 = sum;
	};
	return sum;
}

var reursnive = function(n) {
	if (n <= 2) {
		return 1;
	}
	return reursive(n - 1) + reursive(n - 2);
}