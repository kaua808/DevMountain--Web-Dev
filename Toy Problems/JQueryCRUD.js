// $('#getUsers').on('click', function() {
// 	return $.ajax({
// 		method: GET, PUT, POST, DELETE
// 	})
// })

// C - Cross
// O - Origin
// R - Resource
// S - Sharing 

// C - Create - POST
// R - Read - GET
// U - Update - PUT
// D - Destroy - DELETE

$('#getUsers').on('click', function() {
	return $.ajax({
		method: 'GET'
		url: 'http://reddit.com/r/javasript.json',
		success: function(res) {
			do stuff
		}
	})
})



// Database
// 	//has
// 	users
// 	posts
// 	comments

// server
// 	'http://github.com/api/v1/users'
// 	'http://github.com/api/v1/posts'
// 	'http://github.com/api/v1/comments'

// Documentation 
// 	'to use my api you need an api key'
// 		'to access user data hit this endpoint'
// 			'http://github.com/api/v1/users'



//JQuery evets....
mouseenter - when hovering begins
moussleave  when hovering ends
focus - are in an imput field
blur - you leave input field
click - you click on something
mousedown - hold down the mousedown
mouseup - as mouse is unclicked
ready - once the element  is loaded
hover - mouseenter and moussleave combined
keystroke - do something when I hit a key
keydown - hold the key down a certain about of time and something pops up 
keyup - when key down ends
scroll - dot hings when scrolling
dblclick - on double click
resize - 

//Methods
toggleClass - use 1 event to add and remove a class from something
addClass - add a class
removeClass - remove a class
toggleFade - toggles fade effect
fade - fade effect
animate - takes in an object as instruction
hasClass - checks for a class 
css - change the css code
hide - hide element
show - show element
remove - remove the element
prepend - insert at top of html
append - insert at bottom of html element
attr - find attributes on elemetns
html - add html to element 






