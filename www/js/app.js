var portfolio = angular.module('portfolio', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {

      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

portfolio.config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider){

	$urlRouterProvider.otherwise('/');

	$stateProvider.state('home',{
		url: '/',
		views: {
			home: {
				templateUrl: 'views/home.html',
				controller: 'homeCTRL'
			}
		}
	});

	$stateProvider.state('websites',{
		url: '/websites',
		views: {
			websites: {
				templateUrl: 'views/websites.html',
				controller: 'websitesCTRL'
			}
		}
	});

	$stateProvider.state('website',{
		url: '/websites/:ID',
		views: {
			websites: {
				templateUrl: 'views/websiteDetails.html',
				controller: 'websiteDetailsCTRL'
			}
		}
	});


	$stateProvider.state('designs',{
		url: '/designs',
		views: {
			designs: {
				templateUrl: 'views/designs.html',
				controller: 'designsCTRL'
			}
		}
	});

	$stateProvider.state('design',{
		url: '/designs/:ID',
		views: {
			designs: {
				templateUrl: 'views/designDetails.html',
				controller: 'designDetailsCTRL'
			}
		}
	});

	$stateProvider.state('biography',{
		url: '/biography',
		views: {
			biography: {
				templateUrl: 'views/biography.html',
				controller: 'biographyCTRL'
			}
		}
	});

	$stateProvider.state('contact',{
		url: '/contact',
		views: {
			contact: {
				templateUrl: 'views/contact.html',
				controller: 'contactCTRL'
			}
		}
	});

}]);

portfolio.controller('homeCTRL',['$scope','$http',function($scope,$http){

}]);

portfolio.controller('websitesCTRL',['$scope','$http',function($scope,$http){
	$http.get('websites.json').success(function(site){
		$scope.sites = site.Websites;
		//console.log($scope.sites);
	});
}]);

portfolio.controller('websiteDetailsCTRL',['$scope','$http','$stateParams',function($scope,$http,$stateParams){
	$http.get('websites.json').success(function(details){
		$scope.Title = details.Websites[$stateParams.ID].Title;
		$scope.Photo = details.Websites[$stateParams.ID].Photo;
		$scope.Desc = details.Websites[$stateParams.ID].Desc;
		$scope.Url = details.Websites[$stateParams.ID].Url;
	});
}]);

portfolio.controller('designsCTRL',['$scope','$http',function($scope,$http){
	$http.get('designs.json').success(function(designs){
		$scope.draws = designs.Designs;
		$scope.covers = designs.Covers;
		$scope.times = designs.Pass;
	});
}]);

portfolio.controller('designDetailsCTRL',['$scope','$http','$stateParams',function($scope,$http,$stateParams){
	$http.get('designs.json').success(function(design){
		$scope.Title = design.Designs[$stateParams.ID].Title;
		$scope.Photo = design.Designs[$stateParams.ID].Photo;
		$scope.Desc = design.Designs[$stateParams.ID].Desc;

		$scope.Title = design.Covers[$stateParams.ID].Title;
		$scope.Photo = design.Covers[$stateParams.ID].Photo;
		$scope.Desc = design.Covers[$stateParams.ID].Desc;

		$scope.Title = design.Pass[$stateParams.ID].Title;
		$scope.Photo = design.Pass[$stateParams.ID].Photo;
		$scope.Desc = design.Pass[$stateParams.ID].Desc;
	});
}]);

portfolio.controller('biographyCTRL',['$scope','$http',function($scope,$http){
	
}]);

portfolio.controller('contactCTRL',['$scope','$http',function($scope,$http){
	
}]);
