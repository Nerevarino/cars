'use strict';

angular.module('logIn').component('logIn',  {
    templateUrl:'log-in/log-in.template.html',
    
    controller: function LogInController($http) {

	var self = this;  //для доступа к контроллеру из внутренних замыканий

	this.username = '';      //модель введенного посетителем имя пользователя
	this.password = '';      //модель введенного посетителем пароля пользователя 
	this.message = '';       //модель сообщения посетителю в зависимости от результата проверки логина и пароля

	this.restoreDBKey = function() {
	    self.symKey = JSON.parse(sessionStorage.symKey);
	};	
	this.getDB = function() {
	    self.db = JSON.parse(sjcl.decrypt(self.symKey,sessionStorage.mdb));	    
	};

	this.getRoleParams = function() {
	    this.roleId = sessionStorage.roleId;
	    this.roleName = sessionStorage.roleName;	    
	}

	this.onCreateComponent = function() {    //вызывается всегда при создании/пересоздании этого контроллера компонента
	    self.restoreDBKey();
	    self.getDB();
	    self.getRoleParams();
	};
	

	this.tryLogin = function() {     //функция - внешний интерфейс контроллера - обработчик попытки входа под пользователем с паролем
	    for(let user of self.db.users) {
		if(self.username == user.name) {
		    if(self.password == user.passwd) {
			sessionStorage.roleId = user.roleId;
			sessionStorage.roleName = self.db.roles[user.roleId].name;
			sessionStorage.locationFormsCount = 1;
			window.location.href = '/#!/cars';
		    } else {
			self.message = 'Неверный логин/пароль';
			return;
		    }
		} else {
		    self.message = 'Неверный логин/пароль';
		    return;
		}
	    }
	};

	this.onCreateComponent();
    }
});
