/* global Bulletins */
/* global Meteor */
Meteor.publish('allBulletins', function(opts){
  var opts= opts || {};
  var page= opts.page || 1;
  var res= Bulletins.find({},{limit: page * 10});
  return res;
});

Meteor.publish('singleBulletin', function(id){
  return Bulletins.find(id);
});