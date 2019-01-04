$(document).ready(function(){

$('.tweet-compose').on('click', function(){
	$('.tweet-compose').css('height', '5em');
	$('#tweet-controls').show();
});

$('.tweet-compose').on('blur', function(){
	$('.tweet-compose').css('height', '2.5em');
	$('#tweet-controls').hide();
});

var charcount = 140;

$('.tweet-compose').on('keydown', function() {
	var length = $(this).val().length;
	var length = charcount - length;
	$('#char-count').text(length);
})




});