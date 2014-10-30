var epartiApp = angular.module('epartiApp', ['ngRoute','ui.bootstrap','ui.utils'])
  .run(function ($rootScope, $location) {
    $rootScope.location = $location;
  });