Meteor.methods({
  submitBulletin: function (bulletin) {
    console.log('x');
    var user = Meteor.user();
    if (!user) {
      throw new Meteor.Error(401, 'You need to log in first');
    }

    var additionalParams = {
      author: 'Author',
      createdAt: new Date(),
      userId: user._id 
	 };

    _.extend(bulletin, additionalParams);
    bulletin._id = Bulletins.insert(bulletin);

    return bulletin;
  }
});
