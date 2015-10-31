angular.module('starter.services', [])

// *** PC: This is where you defin the Models and access them like classes in C++
// Each 'factory' can be initialized and if there are class functions, you can use them
// without initialization.
.factory('User', function ($q) {
    var User = Parse.User.extend({
        // Instance methods
        initialize: function(attrs, options) {
            this.isLoggingIn = false;
            this.loggingInError = false;

            this.isSigningUp = false;
            this.signingUpError = false;
        },

        loginUser: function(options) {
            var user = this, defer = $q.defer();
          
            // Validate input
            if(!user.get('username'))
                user.loggingInError = "Invalid Email";
            else if(user.get('password') == "")
                user.loggingInError = "Invalid Password"

            if(user.loggingInError) {
                defer.reject();
            } else {
                user.isLoggingIn = true;
                user.loggingInError = false;

                user.logIn({
                    success: function() {
                        user.isLoggingIn = false;
                        defer.resolve();
                    },
                    error: function(error) {
                        user.isLoggingIn = false;
                        
                        if(error.code == 101)
                            user.loggingInError = "Invalid Credentials";
                        else
                            user.loggingInError = "Login Failed";

                        defer.reject(error);
                    }
                })
            }

            return defer.promise;
        },

        signupUser: function(options) {
            var user = this, defer = $q.defer();
            options = options || {};
            
            // Validate input
            if(!user.get('username'))
                user.signingUpError = "Invalid Username";
            else if(user.get('password') == "")
                user.signingUpError = "Invalid Password";
            else if(user.get('password') != user.verifyPassword)
                user.signingUpError = "Passwords don't match";
            else if(user.get('name') == "")
                user.signingUpError = "Enter a Name";

            if(user.signingUpError) {
                defer.reject();
            } else {
                user.isSigningUp = true;
                user.signingUpError = false;

                user.set("email", user.get("username"));

                user.signUp(null, {
                    success: function() {
                        user.isSigningUp = false;
                        defer.resolve();
                    },
                    error: function(error) {
                        user.isSigningUp = false;
                        user.signingUpError = "Signup Failed";

                        defer.reject(error);
                    }
                });
            }

            return defer.promise;
        },
    }, {
        // Class methods
    });

    // Getters and setters to work with AngularJS.
    
    // Username property
    User.prototype.__defineGetter__("username", function() {
      return this.get("username");
    });
    User.prototype.__defineSetter__("username", function(aValue) {
      return this.set("username", aValue);
    });

    // Password property
    User.prototype.__defineGetter__("password", function() {
      return this.get("password");
    });
    User.prototype.__defineSetter__("password", function(aValue) {
      return this.set("password", aValue);
    });

    // Password property
    User.prototype.__defineGetter__("name", function() {
      return this.get("name");
    });
    User.prototype.__defineSetter__("name", function(aValue) {
      return this.set("name", aValue);
    });

    return User;
})

.factory('Conversation', function ($q) {
    var Conversation = Parse.Object.extend("Conversation", {
        // Instance methods
        initialize: function(attrs, options) {

        }
    }, {
        // Class methods

        getCurrentUserConversations: function() {
          
        }
    });

    return Conversation;
});


;