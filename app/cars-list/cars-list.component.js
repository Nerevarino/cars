'use strict';

angular.module('carsList').component('carsList', {
    templateUrl:'cars-list/cars-list.template.html',
    
    controller: function CarsListController($http, $SQLite) {

	var $this = this;

	this.queries = {};

	this.initDB = function() {
	    $SQLite.dbConfig({
		name: 'Cars.db',
		description: 'application light database',
		version:'1.0'
	    });
	    
	    $this.queries.list_cars = `select brand, model, photo from Cars;`;
	};
	

	this.listCars = function() {
	    $SQLite.execute($this.queries.list_cars).then(function(data){
		$this.cars = [];
		for(let row of data.rows) {
		    $this.cars.push(row);
		}
	    });
	};
	
	this.init = function() {
	    $this.initDB();
	};
	
	this.init();	
    }
});
