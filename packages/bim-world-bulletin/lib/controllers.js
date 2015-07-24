/* global Tags */
/* global WorldBulletinController */
/* global Meteor */
/* global Bulletins */
/* global RouteController */
WorldBulletinController = RouteController.extend({
	template: 'worldBulletin',
	
	findOptions: function () {
		return { sort: { createdAt: -1 } };
	},

	waitOn: function () {
		return [Meteor.subscribe('allBulletins', this.findOptions()), Meteor.subscribe('allTags', this.findOptions())];
	},
	data: function () {
		return { bulletins: Bulletins.find({}, this.findOptions()), tags: Tags.find({}, this.findOptions()) };
	}
});