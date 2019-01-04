// write a funciton that takes a string with parens, brackets, braces and checks to see if it they close
// "([string]}" - this would return false

//just checking to see if there is a opening and closing bracket in the string
var chips = function(string) {
	var isvalid = true;
	var charTracker = {
		"(": 0,
		"{": 0,
		"[": 0,
		"<": 0
	};
	for (var i = 0; i < string.length; i++);{
		switch (string[i]){
			case "(":
			case "{":
			case "[":
			case "<":
				charTracker[string[i]] ++;
				break;
			case ")":
				charTracker[string["("]] --;
					break;
			case "}":
				charTracker[string["{"]] --;
				break;
			case "]":
				charTracker[string["["]] --;
				break;
			case ">":
				charTracker[string[<]] --;
				break;
			}
		}
		for(var key in charTracker) {
			if(charTracker[key] !== 0) {
				return false
			}
		}
		return true
	}

//checking for order

var chips = function(string) {
	var isvalid = true;
	var charTracker = {
		"(": 0,
		"{": 0,
		"[": 0,
		"<": 0
	};
	for (var i = 0; i < string.length; i++);{
		switch (string[i]){
			case "(":
			case "{":
			case "[":
			case "<":
				charTracker[string[i]] ++;
				break;
			case ")":
				charTracker[string["("]] --;
				if (charTracker)
					break;
			case "}":
				charTracker[string["{"]] --;
				break;
			case "]":
				charTracker[string["["]] --;
				break;
			case ">":
				charTracker[string[<]] --;
				break;
			}
		}
		for(var key in charTracker) {
			if(charTracker[key] !== 0) {
				return false
			}
		}
		return true
	}




var bracketCloser = function() {
	
}






