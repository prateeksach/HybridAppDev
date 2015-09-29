angular.module('starter.services', [])

.factory('User', function ($q) {
    var User = Parse.User.extend({
      // Instance Methods
      initialize: function(attrs, options) {

      }
    }, {
      // Class Methods
    })

    // Name property
    User.prototype.__defineGetter__("name", function() {
      return this.get("name");
    });
    User.prototype.__defineSetter__("name", function(aValue) {
      return this.set("name", aValue);
    });

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

    return User;
})

.factory('Chat', function ($q, $rootScope) {
    var Chat = Parse.Object.extend("Chat", {
      // Instance Methods
      initialize: function(attrs, options) {

      }
    }, {
      // Class Methods
      getChats: function() {
        var defer = $q.defer();

        var query1 = new Parse.Query("Chat");
        query1.equalTo("sender", $rootScope.currentUser);

        var query2 = new Parse.Query("Chat");
        query2.equalTo("receiver", $rootScope.currentUser);

        var finalQuery = Parse.Query.or(query1, query2);

        finalQuery.include("sender")
        finalQuery.include("receiver")

        finalQuery.find().then(function(data) {
          defer.resolve(data);
        }, function(error) {
          defer.error(error);
        })

        return defer.promise; 
      }
    })

    return Chat;
});

// .factory('Chats', function ($q) {
//   // Some fake testing data
//   var sampleData = [{
//     id: 0,
//     name: 'Ben Sparrow',
//     lastText: 'You on your way?',
//     face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
//   }, {
//     id: 1,
//     name: 'Max Lynx',
//     lastText: 'Hey, it\'s me',
//     face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
//   }, {
//     id: 2,
//     name: 'Adam Bradleyson',
//     lastText: 'I should buy a boat',
//     face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
//   }, {
//     id: 3,
//     name: 'Perry Governor',
//     lastText: 'Look at my mukluks!',
//     face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
//   }, {
//     id: 4,
//     name: 'Mike Harrington',
//     lastText: 'This is wicked good ice cream.',
//     face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
//   }];

//   var Chats = Parse.Object.extend("Chats", {
//     // Instance methods
//     initialize: function(attrs, options) {

//     }
//   }, {
//     // Class methods
//     all: function() {
//       return sampleData;
//     },
//     remove: function(chat) {
//       sampleData.splice(sampleData.indexOf(chat), 1);
//     },
//     get: function(chatId) {
//       for (var i = 0; i < sampleData.length; i++) {
//         if (sampleData[i].id === parseInt(chatId)) {
//           return sampleData[i];
//         }
//       }
//       return null;
//     }
//   });

//   return Chats;
// });



    // var Event = Parse.Object.extend("Event", {
    //     // Instance methods
    //     initialize: function(attrs, options) {
    //         this.isFetchingEvents = false;
    //         this.fetchingEventsError = false;
    //     }
    // }, {
    //     fetchEvents: function() {
    //         var defer = $q.defer();

    //         Parse.Cloud.run("getMonitoringEventData", {}).then(function(data) {
    //             defer.resolve(data);
    //         }, function(error) {
    //             defer.reject(error);
    //         })

    //         return defer.promise;
    //     }
    // });

    // return Event;