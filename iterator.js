function listIter($scope) {
  $scope.foods = [
    {text: 'Apple'},
    {text: 'Cookie'},
    {text: 'Sandwich'},
    {text: 'Pastry'},
    {text: 'Snack-a-Jacks'}			
  ];

  $scope.addFood = function(){
    $scope.foods.push({text: $scope.food});
    $scope.food = "";
  }
}

/*var foodApp = angular.module('foodApp', []);

  foodApp.controller('foodControl', ['$scope', function($scope){

  $scope.foods = [
    {text: 'Apple'},
    {text: 'Cookie'},
    {text: 'Sandwich'},
    {text: 'Pastry'},
    {text: 'Snack-a-Jacks'}			
  ];

  $scope.addFood = function(){
    $scope.foods.push({text: $scope.food});
    $scope.food = "";
  }
}]);
*/
