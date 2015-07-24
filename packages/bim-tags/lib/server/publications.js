Meteor.publish('allTags', function() {
	return Tags.find({});
});
