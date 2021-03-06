var portfolio = angular.module('portfolio', ['ionic','ngCordova'])

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
	$scope.PNG = "img/thumb.jpg";
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
	$scope.ME = "img/me.jpg";
	$scope.Born = "April 4th, 1990";
	$scope.City = "London, Ontario";
	$scope.Job = "Front-End Developer / Website Designer";

	$scope.tools = [
		{ "SVG":"img/tools/html5.svg","PNG":"img/tools/html5.png","Title":"HTML5" },
		{ "SVG":"img/tools/css.svg","PNG":"img/tools/css.png","Title":"CSS3" },
		{ "SVG":"img/tools/javascript.svg","PNG":"img/tools/javascript.png","Title":"Javascript" },
		{ "SVG":"img/tools/mongo.svg","PNG":"img/tools/mongo.png","Title":"MongoDB" },
		{ "SVG":"img/tools/express.svg","PNG":"img/tools/express.png","Title":"ExpressJS" },
		{ "SVG":"img/tools/angular.svg","PNG":"img/tools/angular.png","Title":"AngularJS" },
		{ "SVG":"img/tools/node.svg","PNG":"img/tools/node.png","Title":"NodeJS" }
	];

	$scope.trades = [
		{ "SVG":"img/tools/sublime.svg","PNG":"img/tools/sublime.png","Title":"Sublime Text" },
		{ "SVG":"img/tools/AI.svg","PNG":"img/tools/AI.png","Title":"Illustrator" },
		{ "SVG":"img/tools/PS.svg","PNG":"img/tools/PS.png","Title":"Photoshop" },
		{ "SVG":"img/tools/inDesign.svg","PNG":"img/tools/inDesign.png","Title":"InDesign" },
		{ "SVG":"img/tools/AE.svg","PNG":"img/tools/AE.png","Title":"After Effects" }
	];
}]);

portfolio.controller('contactCTRL',['$scope','$http','$ionicLoading',function($scope,$http,$ionicLoading){
	$scope.ME = "img/me.jpg";
	$scope.jobs = [
		{ text: 'Free Estimate', value: 'Free Estimate' },
		{ text: 'Website Creation', value: 'Website Creation' },
		{ text: 'Business Card Design', value: 'Business Card Design' }
	];
	$scope.data = { clientSide: 'Free Estimate' };

	$scope.message = {
		'name':'',
		'tel':'',
		'city':'',
		'email':'',
		'message':''
	};

	$scope.finalSubmit = function(){
		$ionicLoading.show({ template: 'Submitting...Thank You!', duration: 1500 })
	};

	$scope.data = {};

	$scope.form = function(){
		var link = "http://michel-beaubien.com/test/api.php";

		$http.post(link,{fullName: $scope.data.fullName}).then(function(res){
			$scope.info = res.data;
		});
	};
}]);

portfolio.directive('formManager', function($ionicLoading){
	return {
		restrict : 'A',
		controller: function($scope){
			$scope.$watch('contactMe.$valid', function(){
				console.log('Form validity changed. Now : ' + $scope.contactMe.$valid);
			});

			$scope.submit = function(){
				if($scope.contactMe.$valid){
					$scope.finalSubmit();
				}else{
					$ionicLoading.show({ template: 'You Must Be Missing Some Info', duration: 1500 })
				}
			}
		}
	}
});

/*
portfolio.controller('fileTransfer',['$scope','$cordovaFileTransfer', function($scope, $cordovaFileTransfer) {
 	$scope.testFileDownload = function(){
 	var url = "img/resumes/MichelBeaubien_Resume.pdf";
 	var filename = url.split("/").pop();
 	var targetPath = codova.file.externalRootDirectory + filename;

 	$cordovaFileTransfer.download(url, targetPath, {}, true).then(function (result) {
    	console.log('Success');
	}, function (error) {
    	console.log('Error');
	}, function (progress) {
    	// PROGRESS HANDLING GOES HERE
	});
 	};

 	$scope.testFileUpload = function(){

 	};
}]);*/
