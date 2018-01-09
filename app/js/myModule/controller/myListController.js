angular.module('myModule').controller('MyListController', function($scope){
	$scope.list = ['Maria', 'Lucie', 'Pierre','Franky', 'Naruto', 'Itachi'];
	$scope.choix = function(chaine){
		console.log('J\'opte pour ' + chaine);
		$scope.yourName = chaine;
	}
});