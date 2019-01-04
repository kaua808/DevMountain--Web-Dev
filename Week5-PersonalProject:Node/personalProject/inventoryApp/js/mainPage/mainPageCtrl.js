var app = angular.module('inventoryApp');

app.controller('mainPageCtrl', function($scope, service, itemsRef, stagedRef) {
	console.log('mainPageCtrl')
	// $scope.itemArray = [];

	$scope.items = itemsRef.$asArray();

	$scope.createItem = function(type, partNumber, description, quantity){
		$scope.items.$add({
			type: $scope.type,
			partNumber: $scope.partNumber,
			description: $scope.description,
			quantity: $scope.quantity,
		});	
		$scope.type = '';
		$scope.partNumber = '';
		$scope.description = '';
		$scope.quantity = '';
	}

 	$scope.gridOptions = { 
    	data: 'items',
    	height: '110px',
    	enableCellSelection: true,
        enableRowSelection: false,
        enableCellEdit: true,
        showGroupPanel: true,
        jqueryUIDraggable: true,
        filterOptions: {filterText: '', useExternalFilter: false},
    	showFilter: true,
    	columnDefs: [
    		{field: 'type', displayName: 'Type', width: '100px', enableCellEdit: true},
        	{field: 'partNumber', displayName: 'Part Number', width: '200px', enableCellEdit: true},
        	{field: 'description', displayName: 'Description', enableCellEdit: true},
        	{field: 'quantity', displayName: 'Quantity', width: '80px', enableCellEdit: true},
        	{field: 'move', displayName: 'Move', width: '180px', cellTemplate: '<input ng-model="moveAmount"><button ng-click="move(moveAmount, row.entity)">Move</button>'},
			{field: 'delete', displayName: 'Delete', width: '60px', cellTemplate: '<button ng-click="delete(row.entity)">Delete</button>'}
      	]
  	};

	var stagedItems = stagedRef.$asArray();

	$scope.add = function(amount, item){
		item.quantity += amount;
		$scope.items.$save(item);
	}
	
	$scope.move = function(amount, item) {
		item.quantity -= amount;
		// $scope.items.$save(item);
		var result = false;
		var indexNumber
		for (var i = 0; i < stagedItems.length; i++) {
			if (stagedItems[i].partNumber === item.partNumber) {
				result = true;
				indexNumber = i;
			} 
		}
		if(result) {
			stagedItems[indexNumber].quantity += parseInt(amount); 
			stagedItems.$save(stagedItems[indexNumber]).then(function(ref) {
					$scope.items.$save(item);
				});

		} else {
			stagedItems.$add({
					partNumber: item.partNumber,
					description: item.description,
					quantity: parseInt(amount)
				}).then(function(ref) {
					$scope.items.$save(item);
				})
		}
		$scope.moveAmount = '';
	}

	$scope.delete = function(row) {
		if (confirm('Delete this item?')) {
    		$scope.items.$remove(row);
		}
  	}


	// $scope.createItem = function(){
	// 	$scope.itemArray.push(new service.ItemObj($scope.partNumber, $scope.description, $scope.quantity));	
	// 	console.log($scope.itemArray);
	// };

});



