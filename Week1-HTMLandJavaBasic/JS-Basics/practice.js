//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

var isTyler = function(name) {
  if (name === "Tyler") {
    return ture
  } else {
    return false;
  }
}

isTyler(/*name*/)

//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

var getName = function() {
  return prompt("Enter your name");
}

getName()

//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.



var welcome = function() {
  var name = getName();
  return alert("welcome " + name);
}

welcome()

//Next problem



//Write a function called adder that uses the 'arguments' keyword that comes with every function to
//loop over all the arguments the function received, add them all together, then return the result.
//Save the result of the return value from your adder function, then alert "The Total Number was " + the number that was
//returned from adder.

function adder() {
    var i, sum = 0;
    for(i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return alert("The Total Number was " + sum);
} 


//Next Problem



//What is the difference between arguments and parameters?

/* Parameters are what you define when you define the function
argument is what you put in when you invoke the function */


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


//you can check if something is thruthy to see if its falsy
//null, nan, undefine, 0, false

if (null, nan, undefine, 0, false) {
  alert(False);
} else {
  alert(true);
}


//Next Problem



//Create a function called myName that returns your name

  var myName = function(){
  return "Kaleo" 
}


//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName();

//Now alert the result of invoking newMyName

alert(newMyName);

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

var outerFn = function() {
  return function() {
    return myName;
  };
};

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here

//Now invoke innerFn.