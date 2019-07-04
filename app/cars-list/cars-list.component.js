'use strict';

angular.module('carsList').component('carsList', {
    template:
    '<ul id="carsList" class="crs-platform">' +
	'<li class="crs-car-preview" ng-repeat="car in $ctrl.cars">' +
	  '<img ng-src="{{\'img/\' + car.photo + \'.jpg\'}}"/>' +
	  '<div >{{car.brand + \' \' + car.model}}</div>' +
	'</li>' +
    '</ul>',
    
    controller: function CarsListController() {
	this.user_role = 0;
	
	this.cars = [
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
    }
});

