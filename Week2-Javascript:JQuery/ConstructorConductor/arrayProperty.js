//Just like you can add methods to your own constructor, you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.
  

var String = function(str){
	this.str = str;
}

String.prototype.reversed = function(){
	this.split("").reverse().join();
}

var hawaiian = new String("Aloha");
var samoan = new String("Talofa");

hawaiian.reversed();