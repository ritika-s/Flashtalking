# Flashtalking

### Code Test
- This is a front end code test to think through a problem and create a first draft of an application.
- Develop a single page application that contains a product list and a product details page. The products can be requested from the following url:http://awsstaging.flashtalkingfeeds.com/temp/bas/test-api/get.php 
- Use Angular

### Solution
- Started off with Angular Seed & built on it.
- Here's the [Demo](http://rshandy.github.io/Flashtalking)

### Project Architecture
  - `index.html` imports all external & internal styles & JS. The directive ng-view helps us render the views from View Directory.
  - `js/app.js` routes as per URL and sets appropriate Controller & View for the given url.
  - `js/services/product.js` contains `product` factory `(for CategoryController)` and `master` service `(for ProductController)`which uses $http service to get data from the provided url. 
  - `js/controllers/CategoryController.js` & `js/controllers/ProductController.js` are the controllers for this app.
  - `view/categories.html` is the Home View which shows the product category list `(data from CategoryController)`. 
  - `view/products.html` is the Product Specific View which shows the product list from the chosen category `(data from ProductController)`.
  - `view/single.html` is the Single Product View which shows the chosen product from the product list `(data from ProductController)`.
