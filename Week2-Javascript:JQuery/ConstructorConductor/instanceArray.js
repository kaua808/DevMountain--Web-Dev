/*
  Your 3 Users will be the following. 
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
}

//Create an Array called 'users' that will store all our instances of User.

var users = [];

var tyler = new User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS');
var cahlan = new User('Cahlan', 'cahlan@devmounta.in', 'iLoveHashtags');
var lenny = new User('Lenny', 'lenny@theLenster.com', 'iLoveLentilSoup');


//Now create and push into your users array 3 seperate instances of User using the data from above in that exact order

users.push(tyler);
users.push(cahlan);
users.push(lenny);

//I could have done it like this....
//  users.push(
//      new User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS'),
//      new User('Cahlan', 'cahlan@devmounta.in', 'iLoveHashtags'),
//      new User('Lenny', 'lenny@theLenster.com', 'iLoveLentilSoup')    
//   )

console.log('Tyler\'s information is ');
//Console.log all of Tylers information
for (var key in users[0]) {
  console.log(users[0][key]);
}


console.log('Lenny\'s information is ');
//Now console.log all of Lennys information

for (var key in users[2]) {
  console.log(users[2][key]);
}


//Now create another instance of User using your own information and then add that to your users array.

var kaleo = new User('Kaleo', 'kauakim@gmail.com', 'iLoveSW&LOTR');
users.push(kaleo)

console.log('All my users names are ');
//Now loop through your users Array and console.log every users name. 

for (var i = 0; i < users.length; i++) {
  console.log(users[i].name);
}