angular.module('myModule').controller('starWarsController', function($scope, $http, ServiceId){
		
		$scope.list = [];
		function loadPage(p){
			$http.get('https://swapi.co/api/people', {params:{page:p}}).then(function(response){
				console.log(response);
				for(var index in response.data.results){
					//$scope.list.push(response.data.results[index]);
					var perso = response.data.results[index];
					perso.id = ServiceId.calculateId(perso);
					$scope.list.push(perso);
				}
				if(response.data.next !== null){
					loadPage(p+1);
				}
			});
		}
		loadPage(1);
});