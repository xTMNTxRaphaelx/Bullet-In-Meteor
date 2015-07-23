Deps.autorun(function () {
  Meteor.subscribe('allBulletins', Session.get('query'));
});