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