function Calcer($scope) {
	$scope.people = [
		{name: "Ilya", payed: 0, peaces: [0, 0, 0], id: 0}
		, {name: "Diana", payed: 0, peaces: [0, 0, 0], id: 1}
	];
	$scope.dishes = [
		{id: 0, title: "fish", price: 20}
		, {id: 1, title: "chips", price: 10}
		, {id: 2, title: "water", price: 5}
		];
	$scope.total_sum = function () {
		var sum = 0;
		_.each($scope.dishes, function(dish) {
			sum += dish.price;
		});
		return sum;
	};
	$scope.add_person = function () {
		$scope.people.push({
			name: "smb", 
			payed: 0, 
			peaces: Array.apply(null, new Array($scope.dishes.length)).map(Number.prototype.valueOf,0),
			id: $scope.people.length
		});
	}
	$scope.add_dish = function () {
		$scope.dishes.push({
			title: "smth", 
			price: 0, 
			id: $scope.dishes.length
		});
		_.each($scope.people, function(person) {
			person.peaces.push(0);
		});
	}
	$scope.inc_peace = function (person_id, dish_id) {
		$scope.people[person_id].peaces[dish_id] += 1;
	}
	$scope.sum_person = function (person_id) {
		var sum = 0;
		for (var i = 0; i < $scope.dishes.length; i++) {
			var sum_dish = 0;
			for (var j = 0; j < $scope.people.length; j++) {
				sum_dish += $scope.people[j].peaces[i];
			};
			sum += 1.0 * $scope.people[person_id].peaces[i] * $scope.dishes[i].price / sum_dish;
		};
		return (sum - $scope.people[person_id].payed).toFixed(1);
	}
	$scope.tips = function () {
		var total = _.reduce($scope.dishes, function (memo, dish) {return memo + dish.price;}, 0);
		var payed = _.reduce($scope.people, function (memo, person) { return memo + person.payed;}, 0);
		return (payed - total).toFixed(1);
	}
}