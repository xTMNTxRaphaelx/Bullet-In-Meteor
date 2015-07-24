/* global Mediator */

if(Meteor.isClient) {
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
}

Meteor.methods({
	tag_clicked: function(tagName) {
		Meteor.call('updateSessionQuery', tagName);
	},
	updateSessionQuery: function(name) {
    if(Meteor.isClient) {
      Session.set('query', {filterTitle: name, page: 1});  
    }
	}
});

if(Meteor.isClient) { 
  
  Deps.autorun(function () {
    Meteor.subscribe('allBulletins', Session.get('query'));
  });  
}

Meteor.startup(function() {
	return Deps.autorun(function() {
		var args;
		args= Mediator.subscribe("tag_clicked");
		if(args) {
			Meteor.call('updateSessionQuery', args[1]);
		}
	});
});