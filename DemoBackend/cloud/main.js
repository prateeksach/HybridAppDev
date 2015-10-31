Parse.Cloud.define("getConversations", function(request, response) {
	// request.params.paramName

	var query = new Parse.Query("Message");

    query.find({
    	useMasterKey: true,
    	success: function(data) {
	      	response.success(data);
    	},
    	error: function(error) {
	      	response.error(error);
    	}
    })
});
