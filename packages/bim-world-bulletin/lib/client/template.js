/* global BiM */
/* global sweetAlert */
/* global Tags */
/* global Tracker */
/* global Meteor */
/* global $ */
/* global Deps */
/* global Session */
/* global Template */
Template.worldBulletin.events({
  'click .js-loadMore button': function () {
    BiM.loadMore({ force: true });
    
  }
});

Template.worldBulletin.helpers({
  tagsPresent: function() {
    return Tags.find().count() > 0;
  },
  bulletinsPresent: function() {
    return Bulletins.find().count() > 0;
  },
  currentSearching: function() {
    return Tracker.nonreactive(function() {
      
      //no search here
      if(!Session.get('query').filterTitle && Session.get('query').tags=== 'no_tags') {
        return 'Nothing selected. Showing all results.';
      }
      
      //single or multiple tags selected here
      if(Session.get('query').filterTitle) {
        //single search here
        if(Session.get('query').filterTitle.tags) {
          return 'Selected: '+ Session.get('query').filterTitle.tags;
        }
        //multiple heres  
        return 'Selected multiple';
      }
      //First Time
      return 'Tag Cloud';  
    });
    
  }
});

Template.worldBulletin.rendered= function() {
  return this.$('.masonry-grid')[0]._uihooks= {
    insertElement: function(node, next) {
      $(node).addClass('off').insertBefore(next);
      return Tracker.autoFlush(function() {
        return $(node).removeClass('off');
      })
    },
    removeElement: function(node) {
      var finishEvent;
      finishEvent = 'webkitTransitionEnd oTransitionEnd transitionEnd msTransitionEnd transitionend';
      $(node).addClass('off');
      return $(node).on(finishEvent, function() {
        return $(node).remove();
      });
    }
  };
};

Template.worldBulletin.rendered = function() {
  return $('#afModal').on('hidden.bs.modal', function() {
    var i, key, len, results, sessionKeys;
    sessionKeys = ['cmCollection', 'cmOperation', 'cmDoc', 'cmButtonHtml', 'cmFields', 'cmOmitFields', 'cmButtonContent', 'cmTitle', 'cmButtonClasses', 'cmPrompt'];
    results = [];
    for (i = 0, len = sessionKeys.length; i < len; i++) {
      key = sessionKeys[i];
      results.push(delete Session.keys[key]);
    }
    return results;
  });
};

Template.worldBulletin.transition= function() {
  return function(from, to, element) {
    return 'fade';   
  };
};