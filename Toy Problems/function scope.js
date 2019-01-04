var outerfn = function() {
  return function() {
    alert("WOO!");
 } 
};

var thing = outerfn();

thing();


//write a inner function that alerts a outer function variable. 


var outerfn = function() {
  var outerFnVar = "this is the variable in the outer function";
  return function() {
    alert(outerFnVar);
 } 
};

//he created the function invocation
var innerfn = makeCounter();
innerFn() // 1
innerFn() // 2
innerFn() // 3
innerFn() // 4

var outerFn = function() {
	
// this is waht i made...


var makeCounter = function(num){
	var counter = num;
	return function() {
		var counter = counter + 1;
	  	return counter;
	};
};

var innerfn = makeCounter();


//now make it so that the child can use the parent argument


var makeCounter = function(arg){;
	return function() {
		var arg = arg + 1; //or arg += 1;
	  	return arg;
	};
};

var innerfn = makeCounter();

// make this work....

  var twice = multiplier(2);
  twice(5)

//my code here.  

var multiplier = function(num){
	return function() {
	   num * 2;
	};	
};















