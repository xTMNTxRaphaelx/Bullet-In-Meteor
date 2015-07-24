/* global Mediator */
Meteor.methods({
	tag_clicked: function(tagId, tagName) {
		console.log(arguments);
		var query = Session.get('query');
		
	}
});

Meteor.startup(function() {
	return Deps.autorun(function() {
		var args;
		args= Mediator.subscribe("tag_clicked");
		if(args) {
			Meteor.call('tag_clicked', args[1]);
		}
	});
});