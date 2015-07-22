/* global Tags */
/* global _ */
Meteor.methods({
	addTags: function(tags, bulletinId) {
		var user= Meteor.user();
		if(!user) {
			throw new Meteor.Error(401, 'You need to log in first');
		}
		
		var additionalParameters= {
			createdAt: new Date(),
      		userId: user._id,
			bulletinId: bulletinId
		};
		
		_.each(tags, function(tag) {
			_.extend(tag, additionalParameters);
			
			tag._id= Tags.insert(tag);
		});
		
		return tags;
	}
});