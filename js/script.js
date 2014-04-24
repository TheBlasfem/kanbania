angular.module('myapp', [])
	.filter('state', function(){
		return function(items, statewish){
			var filtered = [];
			angular.forEach(items, function(item){
				if (item.state== statewish){
					filtered.push(item);
				}
			});
			return filtered;
		};
	})
	.controller('globalcontroller', function(
		$scope){
		$scope.tasks = [];
		$scope.id = 0;
		$scope.addtodo = function(){
			$scope.tasks.push({id: $scope.id,name: $scope.newtodo, state: 1});
			$scope.newtodo = "";
			$scope.id = $scope.id +1; 
		};
		$scope.adddoing = function(e){
			var idselected = $(e.currentTarget).parent().data("id");
			$scope.tasks[idselected].state = 2;
		};
		$scope.adddone = function(e){
			var idselected = $(e.currentTarget).parent().data("id");
			$scope.tasks[idselected].state = 3;
		};
	});