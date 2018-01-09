angular.module('myModule').filter('Longueur', function() {
	return function(input, longueur) {
		return input.filter(function(mot){
			return mot.length == longueur || longueur == undefined;
		});
	}
});