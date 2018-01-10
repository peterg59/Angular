angular.module('myModule').service("StarwarsService", [ '$http', 'ServiceId', function($http, ServiceId){
	
	var p = $http.get('https://swapi.co/api/people', {params:{page:1}})
	
	this.getAll = function(){
		
		var p2 = p.then(function(response){
			 var liste = response.data.results;
			 var listeAvecId = liste.map(function(perso){
				 perso.id = ServiceId.calculateId(perso);
				 return perso;
			 });
			 return listeAvecId;
		});
		return p2;
	};
	var ps = {};
	this.getOne = function(id){
		if(!ps[id]){
			ps[id] = $http.get('https://swapi.co/api/people/'+id);
		}
		var p2 = ps[id].then(function(response){
			return response.data;
		});
		return p2;
	};
		
}]);

/*function loadPage(page){
	var p = $http.get('htps://swapi.co/api/people', {params:{page:page}})
	
	p.then(function(response){
		console.log(response);
		for(var index in response.data.results){
			//$scope.list.push(response.data.results[index]);
			var perso = response.data.results[index];
			perso.id = ServiceId.calculateId(perso);
			$scope.list.push(perso);
		}
		if(response.data.next !== null){
			loadPage(page+1);
		}
	});
}
loadPage(1);*/