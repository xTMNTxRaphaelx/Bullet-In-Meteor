/* global Bulletins */
/* global Meteor */
Meteor.publish('allBulletins', function(){
  return Bulletins.find();
});

Meteor.publish('singleBulletin', function(id){
  return Bulletins.find(id);
});