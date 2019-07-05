'use strict';

angular.module('carsList').component('carsList', {
    templateUrl:'cars-list/cars-list.template.html',
    
    controller: function CarsListController($http, $SQLite) {

	var $this = this;

	this.initDB = function() {
	    $SQLite.dbConfig({
		name: 'Cars.db',
		description: 'application light database',
		version:'1.0'
	    });

	    $this.queries = {
		create_table_roles:
		  `create table Roles (
                     id integer primary key,
                     name text
                   );`,
		init_roles:
		  `insert into Roles(name) values
                     ('client'),
                     ('admin')
                   ;`,
		create_table_users:
		  `create table Users (
                     id integer primary key,
                     name text,
                     passwd text,
                     roleId integer,
                     FOREIGN KEY(roleId) REFERENCES Roles(id)  
                   );`,
		init_users:
		  `insert into Users(name, passwd, roleId) values
                     ('manager', 'myadminpasswd', (select id from Roles where name='admin'))
                   ;`,
		create_table_cars:
		  `create table Cars (
                     id integer primary key,
                     brand text,
                     model text,
                     photo text
                   );`,
		init_cars:
		  `insert into Cars(brand, model, photo) values
                     ('Kia', 'Mohave', 'mohave'),
                     ('Audi', 'Q7', 'q7'),
                     ('BMW', 'X5', 'x5'),
                     ('Chevrolet', 'Tahoe', 'tahoe'),
                     ('Mitsubishi', 'Outlander', 'outlander'),
                     ('Toyota', 'Land Cruiser 200', 'cruiser200'),
                     ('Renault', 'Duster', 'duster'),
                     ('Nissan', 'Pathfinder', 'pathfinder')  
                   ;`		
	    };

	    for(let qname in $this.queries) {
		$SQLite.execute($this.queries[qname]);
	    }
	    $this.queries.list_cars = `select brand, model, photo from Cars;`;
	};
	
	this.truncateDB = function() {
	    var truncate_queries = [
		'drop table Cars;',
		'drop table Users;',
		'drop table Roles;'
	    ];
	    for(let query of truncate_queries) {
		$SQLite.execute(query);
	    }
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
	    $this.sym_key = sjcl.random.randomWords(8);	    
	    $this.initDB();
	    $this.listCars();
	    $this.truncateDB();
	};

	this.init();	
    }
});
