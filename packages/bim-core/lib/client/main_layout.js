/* global Router */
/* global Template */
/* global Transitioner */
Template.mainLayout.helpers({
    activeIfTemplateIs: function (template) {
        var currentRoute = Router.current();
        return currentRoute && template === currentRoute.lookupTemplate() ? 'active' : '';
    }
});

Template.mainLayout.events({
    'click .add-bulletin-btn': function (event) {
        var user = Meteor.user();
        if (!user) {
            event.preventDefault();
            event.stopPropagation();
            sweetAlert("No Login", "You need to log in first before adding Bulletin!", "error");
            throw new Meteor.Error(401, 'You need to log in first');
        }
    }
});