// make the following code work...
var counter = getCounter();
counter(); //2
counter(); //4
counter(); //6
counter(); //8
counter(); //10


// code here...
var getCounter = function() {
    var i = 0;
    return function() { 
    	return i += 2; 
    };
}

var counter = getCounter();

counter();


//or

var counter = (function() {
    var i = 0;
    return function() { 
    	return i += 2; 
    };
})();

counter();