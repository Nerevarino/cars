'use strict';

angular.module('carsList').component('carsList', {
    template:
    '<ul id="carsList" class="crs-platform">' +
	'<li class="crs-car-preview" ng-repeat="car in $ctrl.cars">' +
	  '<img ng-src="{{\'img/\' + car.photo + \'.jpg\'}}"/>' +
	  '<div >{{car.brand + \' \' + car.model}}</div>' +
	'</li>' +
    '</ul>',
    
    controller: function CarsListController($http, $SQLite) {

	$SQLite.dbConfig({
	    name: 'Cars.db',
	    description: 'application light database',
	    version:'1.0'
	});

	this.sym_key = sjcl.random.randomWords(8);

	let separator = '-- delimiter';
	let initdb_queries;
	$http.get('database/initdb.sql').then(function(response) {
	    initdb_queries = response.data.split(separator);
	    for(let query of initdb_queries) {
		$SQLite.execute(query);
	    }	    
	});

    	
	
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

