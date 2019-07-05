'use strict';

angular.module('logIn').component('logIn', {
    templateUrl:'log-in/log-in.template.html',
    
    controller: function LogInController($http, $SQLite) {

	var $this = this;

	this.username = '';
	this.password = '';
	this.message = '';


	this.initDB = function() {
	    $SQLite.dbConfig({
		name: 'Cars.db',
		description: 'application light database',
		version:'1.0'
	    });	    
	};

	this.tryLogin = function() {
	    $SQLite.execute('select * from Users;').then(function(data) {
		for(let row of data.rows) {
		    console.log(row);
		}
	    });
	};

	this.initDB();
    }
});
