/* global TagsSchema */
/* global Mongo */
/* global Tags */
/* global Meteor */
/* global Deps */
Tags= new Mongo.Collection("tags");
Tags.attachSchema(TagsSchema);


Meteor.startup(function() {
	return Deps.autorun(function() {
		var args;
		args= Mediator.subscribe("addTags");
		if(args) {
			Meteor.call('addTags', args[1]);
		}
	});
});

Tags.allow({
	insert: function(userId, doc) {
		return true;
	}
});