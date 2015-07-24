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


// Actions for Infinite Scrolling

function handleFilter(text) {
  var query = Session.get('query');
  query.page = 1;
  if (text === '') {
    query.filterTitle = undefined;
  } else {
    query.filterTitle = text;
  }
  Session.set('query', query);
}

function loadMore(opts) {
  var force = opts.force || false;
  var threshold, target = $('body');
  if (!target.length) return;


  // -60 is for margin bottom given for footer.
  threshold = $(window).scrollTop() + $(window).height() - target.height() - 60;

  // HACK: see http://www.meteorpedia.com/read/Infinite_Scrolling
  if (force || target.offset().top < threshold + 1 && threshold < 2) {
    var query = Session.get('query');
    Session.set('query', { filterTitle: query.filterTitle, page: query.page + 1 });
  }
}

Meteor.startup(function (argument) {
  Session.setDefault('query', { filterTitle: undefined, page: 1 });
  $(window).scroll(loadMore);
});

Deps.autorun(function () {
  Meteor.subscribe('allBulletins', Session.get('query'));
});