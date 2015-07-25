/* global NewBulletinController */
/* global RouteController */
/* global SingleBulletinController */
SingleBulletinController = RouteController.extend({
  template: 'bulletinPage',
  
  waitOn: function(){
    return [Meteor.subscribe('singleBulletin', this.params._id)];
  },

  data: function() {
    return Bulletins.findOne(this.params._id);
  }
});


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
