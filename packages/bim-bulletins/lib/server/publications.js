/* global Bulletins */
/* global Meteor */
Meteor.publish('allBulletins', function(opts){
  console.log('are you publishing?');
  var opts= opts || {};
  var page= opts.page || 1;
  var value= opts.filterTitle || {};
  var res= Bulletins.find(value,{limit: page * 10});
  return res;
});

Meteor.publish('singleBulletin', function(id){
  return Bulletins.find(id);
});