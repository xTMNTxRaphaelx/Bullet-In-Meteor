/* global AutoForm */
/* global Template */
/* global moment */
/* global $ */
Template.bulletin.helpers({
	returnStartingFewString: function(sentence) {
		if(sentence.length > 100) {
			return sentence.substring(0, 100);	
		} else {
			return sentence;
		}
	},
	bulletinTags: function(tag) {
		return Tags.find({});
	},
	bulletinColor: function() {
		var colors= ['lightcyan', 'lightgoldenrodyellow', 'lightgreen', 'lightpink'];
		return colors[Math.floor(Math.random()*colors.length)];
	},
	dateWritten: function() {
		return moment(this.createdAt).fromNow();
	},
	isCreator: function() {
		var user= Meteor.user();
		if(!user) {
			return false;
		} else {
			return user._id=== this.userId;	
		}
	}
});

Template.bulletin.events({
	'click i.bulletin-edit': function(event) {
		event.preventDefault();
		$(event.currentTarget).siblings('a.btn-primary').trigger('click');
	},
	'click i.bulletin-delete': function(event) {
		event.preventDefault();
		$(event.currentTarget).siblings('a.btn-danger').trigger('click');	
	},
	'mouseover .bulletin': function(event) {
		$('.bulletin').addClass('blur');
		$(event.currentTarget).removeClass('blur').addClass('active');
	},
	'mouseout .bulletin': function(event) {
		$('.bulletin').removeClass('blur').removeClass('active');
	}
});

//AutoForm.hooks({
//  submitPostForm: {
//    onSuccess: function(operation, bulletin) {
////      console.log('hali');
////      Mediator.publish('addTags', bulletin.tags, bulletin._id); 
////      Router.go('singlePost', bulletin);
//    }
//  }
//});
