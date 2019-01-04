// write a function that reverse a string by letter without using the
//reverse prototype.


var sentence = "Hello all of you";

var reverse = function(string){
  var reverseSentence = '';
  for (var i = string.length - 1; i >= 0; i--)
    reverseSentence += string[i];
  return reverseSentence;
};

alert(reverse(sentence));