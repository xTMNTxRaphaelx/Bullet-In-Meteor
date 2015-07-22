/* global Meteor */
/* global RouteController */
/* global NewBulletinController */
NewBulletinController = RouteController.extend({
  template: 'newBulletin',
  
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
