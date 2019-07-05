'use strict';

angular.module('logIn').component('logIn',  {
    templateUrl:'log-in/log-in.template.html',
    
    controller: function LogInController($http) {

	var self = this;

	this.username = '';
	this.password = '';
	this.message = '';

	this.db = JSON.parse(sessionStorage.mdb);
	this.roleId = sessionStorage.roleId;
	this.roleName = sessionStorage.roleName;

	this.tryLogin = function() {
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
    }
});
