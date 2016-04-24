var app = angular.module('productApp', ['ngRoute']);
var proReq = '';
app.config(function ($routeProvider) {
  $routeProvider
  	.when('/', {
    	controller: 'CategoryController',
    	templateUrl: 'views/categories.html'
  	})
    .when('/:item', {
        controller: 'ProductController',
        templateUrl: 'views/products.html'
    })
    .when('/:item/:id', {
        controller: 'ProductController',
        templateUrl: 'views/single.html'
    })
  	.otherwise({
  		redirectTo: '/'	
  	});
});