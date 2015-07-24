Template.tag.events({
	'change input[type="checkbox"]': function(event) {
		event.preventDefault();
//		Mediator.publish('tag_clicked', event.target.innerHTML)
	}
});