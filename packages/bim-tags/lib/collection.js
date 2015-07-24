/* global SimpleSchema */
/* global TagsSchema */
/* global Mongo */
/* global Tags */
Tags= new Mongo.Collection("tags");

var tagsSchema= {
	name: { type: String, label: 'name', index: true, unique: true, max: 30 },
	_id: { type: String, optional: true },
	userId: { type: String, optional: true },
	bulletinId: { type: String },
	count: { type: Number, autoValue: function() { return 1; } },
	createdAt: { type: Date, optional: true, 
		autoValue: function() { 
			if(this.isInsert) { 
				return new Date(); 
			} else if(this.isUpsert) { 
				return {$setOnInsert: new Date()}; 
			} else { 
				this.unset(); 
			} 
		}
	},
	updatedAt: {
		type: Date, denyInsert: true, optional: true, autoValue: function() {
			if(this.isUpdate) {
				return new Date();
			}
		}
	}
};
TagsSchema= new SimpleSchema(tagsSchema);

Tags.attachSchema(TagsSchema);

Tags.allow({
	insert: function() {
		return true;
	},
	update: function() {
		return true;
	},
	remove: function() {
		return true;
	}
});