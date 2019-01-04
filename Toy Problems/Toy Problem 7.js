//given an arbitrary input string.  return the first non-repeated character in the string. 
//example:
//firstNonRepeatedCharacter('aabcabd'); // => 'c'
//firstNonRepeatedCharacter('aba'); // => 'b'



var firstNonRepeatedCharacter = function(string) {
  for (var i = 0; i < string.length; i++) {
    var letter = string.charAt(i);
    if (string.indexOf(letter) === i && string.indexOf(letter, i + 1) === -1) {
      return letter;
    }
  }
}

firstNonRepeatedCharacter("aba");

var firstNonRepeatedCharacter = function(string) {
	for (var i = 0; i < string.length; i++)
		var re = new RegExp(string[i], 'g')
		if(string.match(re).length === 1) {
			return string[i]
		}
	}
}
