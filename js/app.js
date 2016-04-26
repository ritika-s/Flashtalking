var app = angular.module('productApp', ['ngRoute']);
var proReq = '';
app.config(function ($routeProvider) {
  $routeProvider
  	.when('/', {
    	controller: 'CategoryController',
    	templateUrl: 'views/categories.html'
  	})
    .when('/hats', {
        controller: 'HatController',
        templateUrl: 'views/products.html'
    })
    .when('/hats/:id', {
        controller: 'HatController',
        templateUrl: 'views/single.html'
    })
    .when('/jackets', {
    	controller: 'JacketController',
        templateUrl: 'views/products.html'
    })
    .when('/jackets/:id', {
      controller: 'JacketController',
        templateUrl: 'views/single.html'
    })
    .when('/shoes', {
    	controller: 'ShoeController',
        templateUrl: 'views/products.html'
    })
    .when('/shoes/:id', {
      controller: 'ShoeController',
        templateUrl: 'views/single.html'
    })
    .when('/tshirts', {
        controller: 'TShirtController',
        templateUrl: 'views/products.html'
    })
    .when('/tshirts/:id', {
        controller: 'TShirtController',
        templateUrl: 'views/single.html'
    })
  	.otherwise({
  		redirectTo: '/'	
  	});
});