/* global Template */
/* global Mediator */
/* global _ */
Template.tag.events({
	'change input[type="checkbox"]': function(event) {
		event.preventDefault();
		var checkedBoxes= $("#tagsCloud").find("input[type='checkbox']:checked"), tagsSelected= [];
		$(checkedBoxes).each(function(i) {
			tagsSelected.push($(this).attr('name'));
		});
		Mediator.publish('tag_clicked', tagsSelected)
	}
});