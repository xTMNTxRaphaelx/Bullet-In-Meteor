Template.tag.events({
	'change input[type="checkbox"]': function(event) {
		event.preventDefault();
		console.log(event);
		Mediator.publish('tag_clicked', event.target.innerHTML)
	}
});