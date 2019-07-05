'use strict';

angular.module('carsList').component('carsList', {
    templateUrl:'cars-list/cars-list.template.html',
    
    controller: function CarsListController($http) {

	var self = this;

	const visitorRoleId = 0;
	const adminRoleId = 1;


	this.newLocation = '';
	this.changeLocation = function(carId) {
	    self.db.cars[carId].location = self.newLocation;
	    sessionStorage.mdb = JSON.stringify(self.db);
	    self.newLocation = '';
	};
	
	if(sessionStorage.used) {
	    self.db = JSON.parse(sessionStorage.mdb);
	    self.roleId = sessionStorage.roleId;
	    self.roleName = sessionStorage.roleName;
	    if(sessionStorage.locationFormsCount > 0) {
		self.locationForms = [{}];		
	    } else {
		self.locationForms = [];				
	    }
	} else {
	    $http.get('database/cars.db').then(function(response) {	   
		sessionStorage.mdb = JSON.stringify(response.data);
		sessionStorage.used = true;		
		self.db = JSON.parse(sessionStorage.mdb);
		self.roleId = visitorRoleId;
		self.roleName = self.db.roles[self.roleId].name;
		sessionStorage.locationFormsCount = 0;
		self.locationForms = [];
		sessionStorage.roleId = self.roleId;
		sessionStorage.roleName = self.roleName;				
	    });	    
	}
    }
});
