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


<<<<<<< HEAD
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
=======
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
<<<<<<< HEAD
    // alert("Hello. How are you " + $scope.name);

    Parse.Cloud.run("getConversations").then(function(data) {
      console.log(data);
    }, function(error) {
      console.log(error);
    })
=======
    alert("Hello. How are you " + $scope.name);
>>>>>>> parent of ae7fda1... changes from 9/22 workshop
>>>>>>> origin/master
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
