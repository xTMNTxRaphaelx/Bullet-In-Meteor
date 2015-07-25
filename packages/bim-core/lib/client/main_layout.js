/* global Router */
/* global Template */
/* global Transitioner */
Template.mainLayout.helpers({
    activeIfTemplateIs: function (template) {
      var currentRoute = Router.current();
      return currentRoute && template === currentRoute.lookupTemplate() ? 'active' : '';
    }
 });