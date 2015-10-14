<<<<<<< HEAD
// Initialize Parse app
var PARSE_APP_ID = 'CQsxzjJRg6VSSNqaFrtHgt0ikrJTOydhTCisCKOi';
var PARSE_JAVASCRIPT_KEY = '7jJTf78dq2QHfrZVv2zyFutcpfb7Qkbw5HWfKkQZ';

Parse.initialize(PARSE_APP_ID, PARSE_JAVASCRIPT_KEY);

=======
// *** PC (Prateek's Comments):
// This file runs first when your app loads so all initialization code should go inside the
// `.run` segment. The `.config` segment is for initializing routes (urls) and what controller/view
// corresponds to each route. 

// PS: My future comments will be tagged with '*** PC'


// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
>>>>>>> parent of ae7fda1... changes from 9/22 workshop
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform, $rootScope, User) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }

    // Set the style for statusbar (org.apache.cordova.statusbar) required
    if (window.StatusBar) {
      StatusBar.styleLightContent();
    }
  });

  if(Parse.User.current()) {
    $rootScope.currentUser = Parse.User.current();
  }
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })

  .state('tab.login', {
    url: '/login',
    views: {
      'tab-login': {
        templateUrl: 'templates/tab-login.html',
        controller: 'LoginCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
