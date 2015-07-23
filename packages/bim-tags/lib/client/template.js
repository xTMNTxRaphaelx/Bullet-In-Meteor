Template.tag.events({
	'click .btn': function(event) {
		event.preventDefault();
		Mediator.publish('tag_clicked', event.target.innerHTML)
	}
});