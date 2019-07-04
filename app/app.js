var carsApp = angular.module('carsApp', ['ngSQLite']);

carsApp.controller('carsController', function($scope) {
    $scope.user_role = 0;

    $scope.cars = [
	{
	    brand:'Kia',
	    model:'Mohave',
	    photo:'mohave'
	},
	{
	    brand:'Audi',
	    model:'Q7',
	    photo:'q7'
	},
	{
	    brand:'BMW',
	    model:'X5',
	    photo:'x5'
	},
	{
	    brand:'Chevrolet',
	    model:'Tahoe',
	    photo:'tahoe'
	},
	{
	    brand:'Mitsubishi',
	    model:'Outlander',
	    photo:'outlander'
	},
	{
	    brand:'Toyota',
	    model:'Land Cruiser 200',
	    photo:'cruiser200'
	},
	{
	    brand:'Renault',
	    model:'Duster',
	    photo:'duster'
	},
	{
	    brand:'Nissan',
	    model:'Pathfinder',
	    photo:'pathfinder'
	}	
    ];
});
