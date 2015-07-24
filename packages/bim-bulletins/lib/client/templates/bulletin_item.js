/* global Template */
/* global Tags */
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
		var colors= ['lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgreen', 'lightpink'];
		return colors[Math.floor(Math.random()*colors.length)];
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
	}
});