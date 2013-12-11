describe('Test iterate js', function () {
  beforeEach(module('foodApp'));

  describe('foodControl', function() {

	it('should have 5 entries by default',inject(function($controller) {
	  var scope = {};
      var ctl = $controller('foodControl',{$scope:scope});

      expect(scope.foods.length).toBe(5);                  	  
	});
  });
});
