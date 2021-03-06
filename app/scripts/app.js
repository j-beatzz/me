'use strict';

/**
 * @ngdoc overview
 * @name jcedevelopApp
 * @description
 * # jcedevelopApp
 *
 * Main module of the application.
 */
angular
  .module('jcedevelopApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(true);
  });

  window.APP = {};
  window.APP.isMobileView = false;
