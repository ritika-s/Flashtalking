app.controller('HatController', ['$scope', 'hat', '$routeParams', function($scope, hat, $routeParams) {
    hat.success(function(data) {
        $scope.styles = data;
        $scope.detail = data.Data.find(findReference);
        function findReference(single) {
            return single.id === $routeParams.id;
        };
        $scope.category = "hats";
    });
}]);

app.controller('JacketController', ['$scope', 'jacket', '$routeParams', function($scope, jacket, $routeParams) {
    jacket.success(function(data) {
        $scope.styles = data;
        $scope.detail = data.Data.find(findReference);
        function findReference(single) {
            return single.id === $routeParams.id;
        };
        console.log($routeParams);
        $scope.category = "jackets";
    });
}]);

app.controller('ShoeController', ['$scope', 'shoe', '$routeParams', function($scope, shoe, $routeParams) {
    shoe.success(function(data) {
        $scope.styles = data;
        $scope.detail = data.Data.find(findReference);
        function findReference(single) {
            return single.id === $routeParams.id;
        };
        $scope.category = "shoes";
    });
}]);

app.controller('TShirtController', ['$scope', 'tshirt', '$routeParams', function($scope, tshirt, $routeParams) {
    tshirt.success(function(data) {
        $scope.styles = data;
        $scope.detail = data.Data.find(findReference);
        function findReference(single) {
            return single.id === $routeParams.id;
        };
        $scope.category = "tshirts";
    });
}]);