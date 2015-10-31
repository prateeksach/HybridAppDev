angular.module('starter.controllers', ['parse-angular'])


.controller('LoginCtrl', function($scope, $rootScope, $state, User) {
  $scope.user = new User();

  $scope.loginUser = function() {
    $scope.user.loginUser().then(function() {
      $rootScope.currentUser = Parse.User.current();

      $state.go("tab.dash")
    }, function(error) {
      console.log(error);
    })
  }
})


// *** PC: Each route should have it's own controller and the controller can let you do many things
// The view files will interact with the controller and the controller will interact with the model.
.controller('DashCtrl', function($scope, $rootScope, $state) {
  if(!$rootScope.currentUser) {
    $state.go("tab.login")
    return;
  }

  $scope.name = $rootScope.currentUser.get("name");

  // *** PC: Define any variables you want with $scope. $scope is essentially the global variable for
  // this particular controller and this view (html file) but in the HTML, you don't have to write $scope.name
  // to access this variable, instead you just type 'name'. Check out tab-dash.html.
  // $scope.name = "Prateek";
  // $scope.isVar = false;

  // *** PC: This is how you define functions and since $scope is accessible by the whole controler
  $scope.hello = function() {
    // alert("Hello. How are you " + $scope.name);

    Parse.Cloud.run("getConversations").then(function(data) {
      console.log(data);
    }, function(error) {
      console.log(error);
    })
  }
})

.controller('ChatsCtrl', function($scope, Chats) {
  // *** PC: You can call class functions for any factory (check out services.js).
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
