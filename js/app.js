function Calcer($scope) {
	$scope.diff = 1;
	$scope.people = [
		{name: "Ilya", payed: 0, peaces: [0, 0, 0], id: 0}
		, {name: "Diana", payed: 0, peaces: [0, 0, 0], id: 1}
	];
	$scope.dishes = [
		{id: 0, title: "fish", price: 20, in_edit: false}
		, {id: 1, title: "chips", price: 10, in_edit: false}
		, {id: 2, title: "water", price: 5, in_edit: false}
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
	$scope.enable_dish_editor = function (dish_id) {
		$scope.dishes[dish_id].in_edit = true;
	}
	$scope.disable_dish_editor = function (dish_id) {
		$scope.dishes[dish_id].in_edit = false;
	}
	$scope.inc_peace = function (person_id, dish_id) {
		$scope.people[person_id].peaces[dish_id] += $scope.diff;
	}
	$scope.sum_person = function (person_id) {
		var sum = 0;
		for (var i = 0; i < $scope.dishes.length; i++) {
			var sum_dish = _.reduce($scope.people, function (memo, person) {
				return memo + person.peaces[i];
			}, 0);
			sum += 1.0 * $scope.people[person_id].peaces[i] * $scope.dishes[i].price / sum_dish;
		};
		return (sum - $scope.people[person_id].payed).toFixed(1);
	}
	$scope.equalize = function (dish_id) {
		for (var i = 0; i < $scope.people.length; i++) {
			$scope.people[i].peaces[dish_id] = 1;
		};
	}
	$scope.tips = function () {
		var total = _.reduce($scope.dishes, function (memo, dish) {return memo + dish.price;}, 0);
		var payed = _.reduce($scope.people, function (memo, person) { return memo + person.payed;}, 0);
		return (payed - total).toFixed(1);
	}
	$scope.set_diff = function (new_diff) {
		$scope.diff = new_diff
	}
}