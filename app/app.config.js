angular.module('carsApp').config([
    '$routeProvider',
    function config($routeProvider) {
      $routeProvider.
	when('/cars', {
          template: '<cars-list></cars-list>'
        }).
        when('/login', {
          template: '<log-in></log-in>'
        }).
        otherwise('/cars');
    }
]);
