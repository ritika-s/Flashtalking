app.controller('ProductController', ['$scope', 'master', '$routeParams','$route', function($scope, master, $routeParams,$route) {
    master.success(function(data) {
        $scope.styles = data;
        $scope.detail = data.Data.find(findReference);
        function findReference(single) {
            return single.id === $routeParams.id;
        };
        $scope.category = $routeParams.item;
    });
    $scope.reloadRoute = function() {
        console.log('here2');
        $route.reload();
    }
}]);