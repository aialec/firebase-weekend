angular.module('firebase.ref', ['firebase', 'firebase.config'])
  .factory('Ref', ['$window', 'FB_CONFIG', function($window, FB_CONFIG) {
    return $window.firebase.initializeApp(FB_CONFIG);
  }]);

// create a module for firebase config
//angular.module('firebase.config', [])
  //.config('FB_CONFIG', {
  //  apiKey: "",
  //  authDomain: "",
  //  databaseURL: "",
  //  storageBucket: "",
  //  messagingSenderId: ""
  //})
  //.constant('loginRedirectPath', '/login');
