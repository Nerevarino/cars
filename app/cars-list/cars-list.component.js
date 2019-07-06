'use strict';

angular.module('carsList').component('carsList', {
    templateUrl:'cars-list/cars-list.template.html',
    
    controller: function CarsListController($http) {

	var self = this;  //для доступа к контроллеру из внутренних замыканий

	const visitorRoleId = 0;
	const adminRoleId = 1;

	this.newCarLocation = '';   //Здесь содержится ссылка на новую позицию машины в Яндекс Картах   


	
	this.generateDBKey = function() {
	    self.symKey = sjcl.random.randomWords(8, 8);
	    sessionStorage.symKey = JSON.stringify(self.symKey);
	};
	this.restoreDBKey = function() {
	    self.symKey = JSON.parse(sessionStorage.symKey);
	};

	
	this.initDB = function(data) {
	    sessionStorage.mdb = sjcl.encrypt(self.symKey, JSON.stringify(data));
	    sessionStorage.used = true;		
	    self.db = JSON.parse(sjcl.decrypt(self.symKey, sessionStorage.mdb));	    
	};
	this.restoreDB = function() {
	    self.db = JSON.parse(sjcl.decrypt(self.symKey,sessionStorage.mdb));
	};
	
	
	this.initVisitorParams = function() {
	    self.roleId = visitorRoleId;
	    self.roleName = self.db.roles[self.roleId].name;
	    sessionStorage.roleId = self.roleId;
	    sessionStorage.roleName = self.roleName;

	    //ниже переменные для отключения ввода нового местоположения машины в случае не администраторской роли
	    //изначально выдается роль посетителя до залогинивания под учетку администратора
	    sessionStorage.locationFormsCount = 0;   
	    self.locationForms = [];	    
	};
	this.restoreRoleParams = function() {   
	    self.roleId = sessionStorage.roleId;
	    self.roleName = sessionStorage.roleName;
	    if(sessionStorage.locationFormsCount > 0) {
		self.locationForms = [{}];		
	    } else {
		self.locationForms = [];				
	    }
	};
	
	
	this.onCreateComponent = function() {   //вызывается всегда при создании/пересоздании этого контроллера компонента
	    if(sessionStorage.used) {     //если пересоздается      
		this.restoreDBKey();
		this.restoreDB();
		this.restoreRoleParams();
	    } else {         //если создается 
		$http.get('database/cars.db').then(function(response) {		
		    self.generateDBKey();
		    self.initDB(response.data);
		    self.initVisitorParams();
		});	    
	    }	    
	};

	this.changeLocation = function(carId) {    //функция - внешний интерфейс контроллера - обработчик ввода новой позиции машины
	    self.db.cars[carId].location = self.newCarLocation;
	    sessionStorage.mdb = sjcl.encrypt(self.symKey, JSON.stringify(self.db));	    
	    self.newCarLocation = '';
	};
	

	this.onCreateComponent();
    }
});
