$(document).ready(function() {

$('#submit').on('click', function() {
	var name = $('#name').val();
	var markup = '<p class="list-item">' + name + '<p>';
	$('#content').prepend(markup);
	$('#name').val('');
});

$('#content').on('click', '.list-item', function(){
	console.log('hi');
	$(this).remove();
   });
});

// $('#content2').hide();

// $('#content').on('mouseenter', function(){
// 	$('#content2').show();
// 	$('content').css('background', 'red');
// });

// $('#content, #content2').on('mouseleave' function() {
// 	$('content2').hide();
// 	$('.box').css('background', 'black');
// })






//$(IWANNASELECTSOMETHING).something(callback(){});