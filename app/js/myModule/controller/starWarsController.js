angular.module('myModule').controller('starWarsController', function($scope, StarwarsService, SearchService){
		
		$scope.list = [];
		$scope.recherche = SearchService.get('espace-recherche');
		$scope.search = SearchService.get('espace-search');
		StarwarsService.getAll().then(function(list){
			$scope.list = list;
		});
		
		/*console.log('AVANT');
		p.then(undefined, function(){
			console.log('NOK');
		}/*, function() {
			console.error('NOK');
		});
		
		/*p.then(function(){
			console.log('OK2');
		}, function() {
			console.error('NOK2');
		});
		
		console.log('APRES');*/
		
		/*function toto(){
			var defer = $q.defer();
			$timeout(function(){
				if(Math.random()>0.5){
					defer.resolve('YES !');
				} else{
					defer.reject('Arg !!');
				}
			}, Math.random()*10000);
			return defer.promise;
		}
		
		var p3 = toto();
		p3.then(function(data){
			console.log(data);
		});*/
});