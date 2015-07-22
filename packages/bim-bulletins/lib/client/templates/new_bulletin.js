/* global Mediator */
/* global Router */
/* global AutoForm */
AutoForm.hooks({
  submitPostForm: {
    onSuccess: function(operation, bulletin) {
      Mediator.publish('addTags', bulletin);
      Router.go('singlePost', bulletin);
    }
  }
});
