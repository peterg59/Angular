angular.module('myModule').directive('starDirective', function(ServiceId) {
	return {
		priority : 0,
		restrict : 'A',
		scope : false,
		link : function(scope, element, attrs) {
			scope.$watch(attrs.starDirective, function(perso) {
				element.find('span').remove();
				for(var film of perso.films.sort()){
					var id = ServiceId.calculateUrlId(film);
					var trilogie = Math.ceil(id/3);
					var span = angular.element('<span>')
						.addClass('fa')
						.addClass('fa-film')
						.addClass('trilogie'+trilogie);
					element.append(span);
				}
			});
		}
	};
});