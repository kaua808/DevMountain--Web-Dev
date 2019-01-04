$(document).ready(function(){
var listo = [];

$('#newTaskForm').hide();

var Task = function(task) {
	this.task = task;
	this.id = 'new';
};

//establising the local storage
var save = function() {
	localStorage.listo = JSON.stringify(listo);
}
//loading the local storage
var load = function() {
	listo = JSON.parse(localStorage.listo);

	for(var i =0; i < listo.length; i++)
		if(lis)
}

if(localStorage.listo) {

}

var addTask = function(task) {
	if(Task) {
		task = new Task(task);
		listo.push(task);
		save();

		$('newItemInput').val('');
		
		$('#newList').append('<a href="#" class="" id="item"><li class="list-group-item">' + task.task + '<span class="arrow pull-right"><i class="glyphicon glyphicon-arrow-right"></span></li></a>')
	}
	$('#newTaskForm, #newListItem').fadeToggle('fast', 'linear');
};


$('#saveNewItem').on('click', function(e) {
	e.preventDefault();
	var task = $('#newItemInput').val().trim();
	addTask(task);
});

//Open form
$('#newListItem').on('click', function () {
	$('#newTaskForm, #newListItem').fadeToggle('fast', 'linear')
});
//Close form
$('#cancel').on('click', function (e) {
	e.preventDefault();
	$('#newTaskForm, #newListItem').fadeToggle('fast', 'linear');
});

$(document).on('click', '#item', function(e) {
	e.preventDefault();
});

$(document).on('click', '#item', function(e) {
	e.preventDefault();
	var task = this;
	advanceTask(task);
	this.id = 'inProgress';
});

$(document).on('click', '#inProgress', function(e) {
	e.preventDefault();
	var task = this;
	task.id = "archived";
	var changeIcon = task.outerHTML.replace('glyphicon-arrow-right', 'glyphicon-remove');
	advanceTask(task);
	$('#archivedList').append(changeIcon);
});

$(document).on('click', '#archived', function (e) {
	e.preventDefault();
	var task = this;
	advanceTask(task);
});




















})