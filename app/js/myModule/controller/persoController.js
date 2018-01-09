angular.module('myModule').controller('persoController', function($scope, $http, $routeParams){
	$scope.perso = undefined;
	var id = $routeParams.id;
	$http.get('https://swapi.co/api/people/'+id).then(function(response){
		$scope.perso = response.data;
	});
});