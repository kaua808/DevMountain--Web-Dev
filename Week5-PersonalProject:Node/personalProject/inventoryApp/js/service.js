var app = angular.module('inventoryApp');

app.service('service', function($firebase) {
	
	// this.ItemObj = function(partNumber, description, quantity) {
	// 	this.partNumber = partNumber;
	// 	this.description = description;
	// 	this.quantity = quantity;
	// }

	// var items = itemsRef.$asArray();


	var firebaseUrl = 'https://inventory-app.firebaseio.com/'

	//creating items on my main page
	this.addItem = function() {
		return $firebase(new Firebase(firebaseUrl + '/inventory'))
	}

	//making the path for my staged page
	this.stagedInventory = function() {
		return $firebase(new Firebase(firebaseUrl + '/stagedInventory'))
	}

	//login


})