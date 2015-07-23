/* global $ */
/* global Deps */
/* global Session */
/* global Template */
Template.worldBulletin.events({
  'click .js-loadMore button': function () {
    loadMore({ force: true });
    
  }
});

Template.worldBulletin.hooks({
  created: function () {
//    $('.grid').masonry({
//      columnWidth: 200,
//      itemSelector: '.grid-item'
//    });
//    $('.bulletinsContent').isotope({
//      itemSelector: '.bulletin',
//      masonry: {
//        columnWidth: 80
//      }
//    });
  }
});

// Actions

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

  threshold = $(window).scrollTop() + $(window).height() - target.height();

  // HACK: see http://www.meteorpedia.com/read/Infinite_Scrolling
  if (force || target.offset().top < threshold + 1 && threshold < 2) {
    var query = Session.get('query');
    Session.set('query', { filterTitle: query.filterTitle, page: query.page + 1 })
  }
}

Meteor.startup(function (argument) {
  Session.setDefault('query', { filterTitle: undefined, page: 1 });
  $(window).scroll(loadMore);
});

