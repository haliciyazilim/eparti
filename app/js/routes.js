epartiApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'html/pages/home.html',
      controller: 'homeController'
    })
    .when('/subjects/:subjectId', {
      templateUrl: 'html/pages/subject.html',
      controller: 'subjectController'
    })
    .otherwise({
      redirectTo: '/'
    });
});

