/* global Posts */
/* global RouteController */
/* global WorldBulletinController */
WorldBulletinController = RouteController.extend({
	template: 'worldBulletin',
	
	layoutTemplate: 'mainLayout',

	findOptions: function () {
		return { sort: { createdAt: -1 } };
	},

	waitOn: function () {
		return Meteor.subscribe('allPosts', this.findOptions());
	},
	data: function () {
		return { posts: Bulletins.find({}, this.findOptions()) };
	}
});
