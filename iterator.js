function listIter($scope) {
  $scope.foods = [
    {text: 'Apple'},
    {text: 'Cookie'},
    {text: 'Sandwich'},
    {text: 'Pastry'},
    {text: 'Snack-a-Jacks'}			
  ];
}

$scope.AddFood = function(){
  $scope.foods.push(foods.text);
})

