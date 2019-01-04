//create a function that can only be invoked once and that will accept any number of perameters

var variable = ("anything you want");

function oneTime(a, b, c, d, e, f, g){
   oneTime = Function("");
   alert(a);
}


oneTime(variable);
// will not run this second time
oneTime(variable);

//
var string = "hello world";

var once = function(str) {
	executed = false;
	return function() {
		if (!executed) {
			console.log(str);
			executed = true
		}
	}
}

//

var once = function(num1, num2) {
	if(!once.invoked){
		once.invoked = true;
		return num1 + num2;
	}
}

//


var functionCreator = function(fn, n){
	var counter = 0;
	return function(){
		if (counter < n) {
			fn.apply(this, arguement);
			counter++
		}
	}
}