/* global Tags */
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
			Meteor.call('addTags', args[1], args[2]);
		}
	});
});

Meteor.startup(function() {
	return Deps.autorun(function() {
		var args;
		args= Mediator.subscribe("update_tags");
		if(args) {
			Meteor.call('update_tags', args[1], args[2], args[3]);
		}
	});
});

Meteor.startup(function() {
	return Deps.autorun(function() {
		var args;
		args= Mediator.subscribe("delete_tags");
		if(args) {
			Meteor.call('delete_tags', args[1]);
		}
	});
});

Meteor.methods({
	// This fn checks if already tag exist by given name. It found it return 1st tag else return false.
	tagAlreadyExist: function(tagName) {
		var tag= Tags.find({name: tagName}).fetch();
		if(tag.length> 0) {
			return tag[0];
		}
		return false;
	},
	updateTagCount: function(tagObj, counterValue) {
		Tags.update(tagObj._id, {$inc: {count: counterValue}});
	},
	addTags: function(tagsArray, bulletinId) {
		var user= Meteor.user();
		if(!user) {
			throw new Meteor.Error(401, 'You need to log in first');
		}
		
		var additionalParameters= {
			userId: user._id,
			bulletinId: bulletinId
		};
		
		Tracker.nonreactive(function() {
			_.each(tagsArray, function(tag) {
				var old_tag= Meteor.call('tagAlreadyExist', tag);
				if(old_tag) {
					Meteor.call('updateTagCount', old_tag, 1);
				} else {
					var tagObj= {name: tag};
					_.extend(tagObj, additionalParameters);
					Tags.insert(tagObj);
				}
			});
		});
	},
	delete_tags: function(tagsArray) {
		Tracker.nonreactive(function() {
			_.each(tagsArray, function(tag) {
				var tag= Meteor.call('tagAlreadyExist', tag);
				if(tag.count=== 1) {
					Tags.remove(tag._id);
				} else {
					Meteor.call('updateTagCount', tag, -1);
				}
			});
		});	
	},
	update_tags: function(previousTagsArray, newTagsArray, bulletinId) {
		Tracker.nonreactive(function() {
			_.each(previousTagsArray, function(previousTag, i) {
				//if previous tag still exist in current tags.. remove that item from new array. Remaining item in new array will be which are new
				if(newTagsArray.indexOf(previousTag) !== -1) {
					newTagsArray.splice(newTagsArray.indexOf(previousTag), 1);
				} else {
					//decrease old tal value.. Delete if value if 1
					var oldTag= Tags.find({name: previousTag}).fetch();
					var oldTagCount= oldTag[0].count;
					if(oldTagCount=== 1) {
						Tags.remove(oldTag[0]._id);
					} else {
						Tags.update(oldTag[0]._id, {$inc: {count: -1}});
					}
				}
				
				if(i=== previousTagsArray.length-1) {
					//increase new tags value.. Create if doesnt exist.
					Meteor.call('addTags', newTagsArray, bulletinId);		
				}
			});	
		});
	}
});