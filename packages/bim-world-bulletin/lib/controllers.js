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
		return [Meteor.subscribe('allBulletins', this.findOptions()), Meteor.subscribe('allTags', this.findOptions()), Meteor.subscribe('favorites')];
	},
	data: function () {
		var query= Session.get('query');
		var bulletinQuery= query.filterTitle ? query.filterTitle : {};
		return { bulletins: Bulletins.find(bulletinQuery, this.findOptions()), tags: Tags.find({}, this.findOptions()) };
	}
});