// Triangle had n number of rows.  Each row has one less bleck than the row below it.  
// Create a function that takes n and calculates the total number of blocks in the triangle.

// example: triangle with 3 rows

    .
   . .
  . . .
 . . . . 
. . . . . 
// function returns 6 

Bonus: create the triangle.

var triangle = function(n) {
	var total = 0;
	for (var i = 0; i < n + 1; i++) {
		total += i;
	}
	return total;
}

function triangle(n, x) {
	if(!x) x = 1;
	var string = "";
	if (x === 1) string += '\n';
	for(var i = 0; i < (n - x); i++) {
		string += ' ';
	}
	for (var i = 0; i < x; i++) {
		string = '* ';	
	}
	string += '\n'
	if (x !== n)
}