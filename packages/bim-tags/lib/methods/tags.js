/* global Tags */
/* global _ */
Meteor.methods({
	addTags: function(bulletinObject) {
		var user= Meteor.user();
		if(!user) {
			throw new Meteor.Error(401, 'You need to log in first');
		}
		var additionalParameters= {
			createdAt: new Date(),
      		userId: user._id,
			bulletinId: bulletinObject._id
		};
		
		_.each(bulletinObject.tags, function(tag, i) {
			var tagObject= {};
			tagObject.name= tag;
			_.extend(tagObject, additionalParameters);
			var tag= Tags.insert(tagObject);
			console.log(tag);
		});
	}
});