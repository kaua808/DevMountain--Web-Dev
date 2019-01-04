var app = angular.module('inventoryApp');

app.controller('stagedCtrl', function($scope, service, stagedRef) {

	$scope.stagedItems = stagedRef.$asArray();


 	$scope.gridOptions = { 
    	data: 'stagedItems',
    	height: '110px',
    	enableCellSelection: true,
        enableRowSelection: false,
        enableCellEdit: true,
        showGroupPanel: true,
        jqueryUIDraggable: true,
        filterOptions: {filterText: '', useExternalFilter: false},
    	showFilter: true,
    	columnDefs: [
        	{field: 'partNumber', displayName: 'Part Number', width: '200px', enableCellEdit: true},
        	{field: 'description', displayName: 'Description', enableCellEdit: true},
        	{field: 'quantity', displayName: 'Quantity', width: '80px', enableCellEdit: true},
        	{field: 'move', displayName: 'Move', width: '180px', cellTemplate: '<input ng-model="soldAmount"><button ng-click="sold(soldAmount, row.entity)">Sold</button>'},
			    {field: 'delete', displayName: 'Delete', width: '60px', cellTemplate: '<button ng-click="delete(row.entity)">Delete</button>'}
      	],
  	};
  	

  	
  	$scope.sold = function(amount, item) {
  		item.quantity -= amount;
  		$scope.stagedItems.$save(item);
  	}

	$scope.delete = function(row) {
		if (confirm('Delete this item?')) {
  			$scope.stagedItems.$remove(row);
  		} else {
  			
  		}
  	}

});




