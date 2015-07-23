Meteor.publish('allTags', function() {
	return Tags.find({});
});

Meteor.publish('bulletinTags', function(bulletinId) {
	return Tags.find({'bulletinId': bulletinId});
});

