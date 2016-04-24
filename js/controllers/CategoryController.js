app.controller('CategoryController', ['$scope', '$route', 'product', function($scope, $route, product) {
  product.success(function(data) {
    $scope.productCategories = data;
  });
  $scope.reloadRoute = function() {
    $route.reload();
  }
}]);