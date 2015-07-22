/* global Meteor */
/* global Bulletins */
/* global BiM */
/* global RouteController */
WorldBulletinController = RouteController.extend({
	template: 'worldBulletin',
	
	layoutTemplate: 'mainLayout',

	findOptions: function () {
		return { sort: { createdAt: -1 } };
	},

	waitOn: function () {
		return Meteor.subscribe('allBulletins', this.findOptions());
	},
	data: function () {
		return { bulletins: Bulletins.find({}, this.findOptions()) };
	}
});
