ES6.js

//let key word
if(true) {
	var i = 0
}

vs

if(true) {
	let i = 0 
}

or for (let i = 0){

}
// let creates its own scope


//ify
(function() {
	return 6
})();

//
var name = "kaleo"
//not sure if you input the variable name or the value within the curly brackets
var sentence = 'my name is ${name}'

vs

var sentence = "my name is " + name;

//
function test() {
	return [1,2,3]
}

var [a,b,c] = test();

console.log(1,2,3)

function test() {
	return {
		a: 1,
		b: 2,
		c:3
	}
}

var {a:first, b:second, c:third} = test()
==> 1 = first(1:first) ect...

//classes
class Student {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	getStuff() {
		return this.name
	}
}

class Kaleo extends Student {
	constructor(name, age, extra, stuff){
		super(name, age);
		this.extra = extra;
		this.stuff = stuff;
	}
	beGreat(){
		console.log("yeah")
	}
}

class Dallin extends Kaleo {
	constructor(name,age,extra,stuff, goes, here) {
		super(name,age,extra,stuff);
		this.here;
		this.goes;
	}
}
var you = new student ("Oliver", "dunno")
var me = new Kaleo ("Kaleo", 24, "this", "that")
var him = new Dallin ("Dallin", 26, "this", "that", "him", "her");

//const (constance)
const kaleo = "Kaleo";

kaleo = "pig"; //pig wont exicute


//exporting and importing
export {anything}
import ----- from 'filename'

//also look up destructoring

//native promises
var greg = new Promise(function(resolve, reject) {
	resolve(your stuff)
});

greg.then(function(here) {
	console.log(here)
})

//default params
function kaleo(x=1,y='y'){

}

function thing() {
	if(!x){
		x=1
	}
}

//property method assignment
var obj = {
	meth() {

	},
	// the one below is how it used to be but the meth on top in ES6 allows us to get rid of the function key word
	meth2: function(){

	}
}

//obj initilize with short hand
var a = 'a';
var b = 'b';
var c = 'c';

var obj = {a,b,c};


//rest params
function dan(a, b, ...stuff) {
	console.log(stuff)
}

dan(1, 2, 3, 4, 5)
//you can name stuff anything but the three ... are the key
//stuff will be the rest of the params(a=1, b=2, stuff=3, 4, 5)

//spread operator
function dan (a, b, c){
	console.log(a, b, c)
}

var arg = [1, 2, 3]

dan(...arg)
arg.push(...[4, 5, 6])

//function star?
function* Kaleo(){
	var i = 0;
	while(i < 7){
		yield i++
	}
}

var iter = Kaleo();

iter.next()
//when you call iter it'll return 0, then the next time you call it 1, and the next time 2, ect. only until 6 and it'll be done

//native promises
var myPromise = new Promise(function(res, reject) {
	setTimeout(function() {
		return res('timer finished')		
	})
})






