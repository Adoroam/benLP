app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        redirectTo: "/home"
      })
      .when('/home', {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl as home'
      })
     .when('/modules', {
        templateUrl: 'templates/modules.html',
        controller: 'modCtrl as mod'
     })
     .when('/reflection', {
        templateUrl: 'templates/reflection.html',
        controller: 'reflCtrl as refl'
     })
      .otherwise({
        redirectTo: "/home"
      });
}]);
