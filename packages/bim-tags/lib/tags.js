/* global Tracker */
/* global _ */
/* global Mediator */
/* global Deps */
/* global Meteor */
Meteor.startup(function() {
	return Deps.autorun(function() {
		var args;
		args= Mediator.subscribe("addTags");
		if(args) {
			console.log(args);
			Meteor.call('addTags', args[1], args[2]);
		}
	});
});

Meteor.methods({
	addTags: function(tagsArray, bulletinId) {
		var user= Meteor.user();
		if(!user) {
			throw new Meteor.Error(401, 'You need to log in first');
		}
		
		var additionalParameters= {
			userId: user._id,
			bulletinId: bulletinId
		};
		
		// This fn checks if already tag exist by given name. It found it return 1st tag else return false.		
		function tagAlreadyExist(tagName) {
			var tag= Tags.find({name: tagName}).fetch();
			if(tag.length> 0) {
				return tag[0];
			}
			return false;
		}
		
		Tracker.nonreactive(function() {
			_.each(tagsArray, function(tag) {
				var old_tag= tagAlreadyExist(tag);
				if(old_tag) {
					Meteor.call('updateTagCount', old_tag);
				} else {
					var tagObj= {name: tag};
					_.extend(tagObj, additionalParameters);
					Tags.insert(tagObj);
				}
			});
		});
	},
	updateTagCount: function(tagObj) {
		Tags.update(tagObj._id, {$inc: {count: 5}});
	}
});