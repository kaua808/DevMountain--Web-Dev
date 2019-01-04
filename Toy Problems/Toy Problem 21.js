// write a function that console logs numbers from 1 to 100.
// but for multiples of 3, print 'fizz'.
// for multiples of 5, print 'buzz'.
// for multiples of both 3 and 5, print 'fizz buzz',

// eg '1, 2, fizz, 4, buzz'  etc.


var fizzBuzz = function() {
	var num = 100;
	while(num) {
	    if(num % 15 === 0){
	        console.log("fizzbuzz");
	        num -= 1;
	    } else {
	        if(num % 3 === 0){
	            console.log("fizz");
	            num -= 1;
	        } else {
	            if(num % 5 === 0) {
	                console.log("buzz");
	                num -= 1;
	            } else {
	                console.log(num)
	                num -= 1;
	            }
	        }
	    }
	}
}

var fizzBuzz2 = function() {
	var str = '1';
	for(var i = 2; 1 <= 100; i++) {
		if(1 % 15 === 0) {
			str += ', fizzbuzz';
		} else if (i % 3 === 0) {
			str += ', fizz';
		} else if (i % 5 === 0) {
			str += ', buzz';
		} else {
			str += ', ' + i;
		}
	}
	console.log(str)
}

var recursiveFizzBuzz = function(max, next) {
	next = next === undefined ? 1 : next;
	if(next === max + 1) {
		return
	}else {
		if (next % 15 === 0) {
			console.log('fizzbuzz');
		} else if ( next % 5 === 0) {
			console.log('buzz');
		} else if (next % 3 === 0) {
			console.log('fizz');
		} else {
			console.log('next');
		}
		next += 1;
		recursiveFizzBuzz(max, next)
	}
}
