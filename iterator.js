
var foodApp = angular.module('foodApp', []);

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

  foodApp.controller('miscControl', ['$scope', function($scope){
  }]);

  foodApp.controller('switchControl', ['$scope', function($scope){
 
    $scope.items = ['settings','home','other'];
    $scope.selection = $scope.items[0];
  }]);

  foodApp.controller('labelControl', ['$scope','$http', 
    function($scope, $http) {
      
      $scope.labels = [];
      $http.get('http://api.trello.com/1/boards/4d5ea62fd76aa1136000000c').success(function(data) { 
        for(var i = 0; i < data.length; i++ ) {
            $scope.labels.push(data.labelNames[i]);
        } 
  	  });	  
    }
  ]);

foodApp.directive('osListcopy', function() {
  return {
    restrict: 'AE',
    scope: { 
       foods :'='
    },
    template: '<ul><li ng-repeat="fooditem in foods | filter:search" >{{fooditem.text }}</li></ul>'
  }
});

