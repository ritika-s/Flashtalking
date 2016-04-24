app.factory('product', ['$http', function($http) {
  return $http.get('http://awsstaging.flashtalkingfeeds.com/temp/bas/test-api/get.php') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            });
}]);

app.service('master', ['$http', '$location', function($http, $location) {
    var givenCategory=$location.path().replace('/','');
    console.log(givenCategory);
    return $http.get('http://awsstaging.flashtalkingfeeds.com/temp/bas/test-api/get.php?category='+givenCategory)
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        });
}]);

// app.factory('jacket', ['$http', function($http) {
//   return $http.get('http://awsstaging.flashtalkingfeeds.com/temp/bas/test-api/get.php?category=jackets')
//             .success(function(data) {
//               return data;
//             })
//             .error(function(err) {
//               return err;
//             });
// }]);
//
// app.factory('tshirt', ['$http', function($http) {
//   return $http.get('http://awsstaging.flashtalkingfeeds.com/temp/bas/test-api/get.php?category=tshirts')
//             .success(function(data) {
//               return data;
//             })
//             .error(function(err) {
//               return err;
//             });
// }]);
//
// app.factory('shoe', ['$http', function($http) {
//   return $http.get('http://awsstaging.flashtalkingfeeds.com/temp/bas/test-api/get.php?category=shoes')
//             .success(function(data) {
//               return data;
//             })
//             .error(function(err) {
//               return err;
//             });
// }]);
//
// app.factory('hat', ['$http', function($http) {
//   return $http.get('http://awsstaging.flashtalkingfeeds.com/temp/bas/test-api/get.php?category=hats')
//             .success(function(data) {
//               return data;
//             })
//             .error(function(err) {
//               return err;
//             });
// }]);