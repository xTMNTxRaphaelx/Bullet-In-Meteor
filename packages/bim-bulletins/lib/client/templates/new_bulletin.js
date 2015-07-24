/* global Mediator */
/* global Router */
/* global AutoForm */
AutoForm.hooks({
  submitPostForm: {
    onSuccess: function(operation, bulletin) {
//      console.log('hali');
//      Mediator.publish('addTags', bulletin.tags, bulletin._id); 
//      Router.go('singlePost', bulletin);
    }
  }
});
