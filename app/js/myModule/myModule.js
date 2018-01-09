angular.module('myModule',['ngRoute']).config(function($routeProvider) {
    $routeProvider
    .when('/people', {
    	templateUrl : '../../people.html',
    	controller : 'starWarsController'
    }).when('/people/:id',{
    	templateUrl : '../../perso.html',
    	controller : 'persoController'
    })
    .otherwise({
        redirectTo : "/people"
     });
});
