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
		return [Meteor.subscribe('allBulletins'), Meteor.subscribe('allTags')];
	},
	data: function () {
		return { bulletins: Bulletins.find({}, this.findOptions()), tags: Tags.find({}, this.findOptions()) };
	}
});


Meteor.startup(function() {
	return Deps.autorun(function() {
		var args;
		args= Mediator.subscribe("tag_clicked");
		if(args) {
			Meteor.call('tag_clicked', args[1]);
		}
	});
});