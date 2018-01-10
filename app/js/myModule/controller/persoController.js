angular.module('myModule').controller('persoController', function($scope, $routeParams, StarwarsService){
	$scope.perso = undefined;
	var id = $routeParams.id;
	
	StarwarsService.getOne(id).then(function(data){
		$scope.perso = data;
	});
});