(function() {
  'use strict';
  angular.module('firebase.appauth', ['firebase', 'firebase.ref'])

    .factory('Auth', function($firebaseAuth, Ref) {
      return $firebaseAuth();
    });
})();
