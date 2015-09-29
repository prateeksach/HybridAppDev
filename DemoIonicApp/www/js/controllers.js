angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $rootScope, $state, User) {
  $scope.user = new User()

  $scope.loginUser = function() {
    $scope.user.logIn().then(function(data) {
      $rootScope.currentUser = Parse.User.current();
      $state.go("tab.dash")
    }, function(error) {
      alert("Error in Login.")
    })
  }

  $scope.signupUser = function() {
    $scope.user.signUp().then(function(data) {
      $rootScope.currentUser = Parse.User.current();
      $state.go("tab.dash")
    }, function(error) {
      alert("Error in Signup.")
    })
  }
})

.controller('DashCtrl', function($scope, $rootScope, $state, User) {
  if(!$rootScope.currentUser) {
    $state.go("tab.login");
    return;
  }

  $scope.name = "Prateek";

  $rootScope.logout = function() {
    Parse.User.logOut();
    $rootScope.currentUser = null;
    $state.go("tab.login");
  }
})

.controller('ChatsCtrl', function($scope, $rootScope, Chat) {
  if(!$rootScope.currentUser) {
    $state.go("tab.login");
    return;
  }

  $scope.chats = [];

  $scope.getChats = function() {
    Chat.getChats().then(function(data) {
      $scope.chats = data;
      console.log(data);
    }, function(error) {
      alert("Error in getChats")
    })
  } 

  $scope.getChats();
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
