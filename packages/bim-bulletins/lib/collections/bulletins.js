/* global BulletinSchema */
/* global Mongo */
/* global Bulletins */
Bulletins = new Mongo.Collection('bulletins');
Bulletins.attachSchema(BulletinSchema);

Bulletins.allow({
	insert: function(userId, doc) {
		return true;
	},
	remove: function(userId, doc) {
//		if(doc && doc.userId=== userId) {
			return true;
//		}
		
	},
	update: function(userId, doc) {
//		if(doc && doc.userId=== userId) {
			return true;
//		}
	}
});

Bulletins.after.insert(function(userId, bulletin) {
	Mediator.publish('addTags', bulletin.tags, bulletin._id);
});