/* global Meteor */
/* global $ */
/* global Deps */
/* global Session */
/* global Template */
Template.worldBulletin.events({
  'click .js-loadMore button': function () {
    loadMore({ force: true });
    
  },
  'click .btn.btn-primary': function(event) {
    var user = Meteor.user();
    if (!user) {
      event.preventDefault();
      event.stopPropagation();
      sweetAlert("No Login", "You need to log in first before adding Bulletin!", "error");
      throw new Meteor.Error(401, 'You need to log in first');
    }
  }
});

Template.worldBulletin.helpers({
  tagsPresent: function() {
    return Tags.find().count() > 0;
  },
  bulletinsPresent: function() {
    return Bulletins.find().count() > 0;
  }
});