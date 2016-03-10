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


	$stateProvider.state('designs',{
		url: '/designs',
		views: {
			designs: {
				templateUrl: 'views/designs.html',
				controller: 'designsCTRL'
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
	
}]);

portfolio.controller('designsCTRL',['$scope','$http',function($scope,$http){
	
}]);

portfolio.controller('biographyCTRL',['$scope','$http',function($scope,$http){
	
}]);

portfolio.controller('contactCTRL',['$scope','$http',function($scope,$http){
	
}]);
