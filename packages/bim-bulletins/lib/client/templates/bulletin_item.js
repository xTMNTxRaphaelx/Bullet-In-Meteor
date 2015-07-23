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
	}
});