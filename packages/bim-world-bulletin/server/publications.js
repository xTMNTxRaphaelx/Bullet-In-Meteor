Meteor.publish('allPosts', function(){
  return Bulletins.find();
});