Meteor.publish('singleBulletin', function(id){
  return Bulletins.find(id);
});