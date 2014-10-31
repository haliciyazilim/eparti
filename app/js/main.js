var epartiApp = angular.module('epartiApp', ['ngRoute','ui.bootstrap','ui.utils'])
  .run(function ($rootScope, $location) {
    $rootScope.location = $location;
  });

$(window).on('beforeunload', function() {
  $(window).scrollTop(0);
});