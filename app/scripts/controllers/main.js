'use strict';

/**
 * @ngdoc function
 * @name firebaseWeekendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firebaseWeekendApp
 */
angular.module('firebaseWeekendApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
