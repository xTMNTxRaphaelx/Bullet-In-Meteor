Meteor.methods({
	tag_clicked: function(tagId, tagName) {
		console.log(arguments);
		var query = Session.get('query');
		
	}
});