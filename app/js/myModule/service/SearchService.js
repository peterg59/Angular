angular.module('myModule').service("SearchService", [ function (){
	var memory = {};
	
	this.get = function(key){
		if(!memory[key]){
			memory[key] = {};
		}
		return memory[key];
	}
}]);