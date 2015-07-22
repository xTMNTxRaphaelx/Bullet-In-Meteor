/* global Meteor */
/* global RouteController */
/* global NewBulletinController */
NewBulletinController = RouteController.extend({
  template: 'newBulletin',
  
  layoutTemplate: 'mainLayout',

  onBeforeAction: function() {
    if (!Meteor.user()) {
      if (Meteor.loggingIn()) {
        this.render(this.loadingTemplate);
      } else {
        this.render('accessDenied');
      }
    } else {
      this.next();
    }
  }
});
