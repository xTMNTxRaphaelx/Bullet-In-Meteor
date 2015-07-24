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
		return true;
	},
	update: function(userId, doc) {
		return true;
	}
});
