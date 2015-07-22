/* global Router */
/* global Template */
/**
 * The global namespace for Bullet in Meteor utils.
 * @namespace BiM.utils
 */

BiM.utils = {};

// Mediator Package for Communication from Package(manuel-schoebel.com/blog/mediator-pattern)
//The Mediator has two functions, one to subscribe to a channel and one to publish to a channel. 
//var Mediator;

Mediator = {
  channels: {},
  publish: function(name) {
    this.channels[name].args = _.toArray(arguments);
    this.channels[name].deps.changed();
  },
  subscribe: function(name) {
    if (!this.channels[name]) {
      this.channels[name] = {
        deps: new Deps.Dependency,
        args: null
      };
    }
    this.channels[name].deps.depend();
    return this.channels[name].args;
  }
};