/* global BulletinSchema */
/* global Bulletins */
Bulletins = new Mongo.Collection('bulletins');

var bulletinFields = {
  title: { type: String, label: 'Title' },
  body: { type: String, label: 'Description', autoform: { afFieldInput: { type: 'summernote', class: 'editor' } } },
  _id: { type: String, optional: true, autoform: { omit: true } },
  userId: { type: String, optional: true, autoform: { omit: true } },
  author: { type: String, optional: true, autoform: { omit: true } ,
    autoValue: function() {
		var user= Meteor.user();
		if(user.profile && user.profile.name) {
			return user.profile.name;
		} else {
			return 'Author';
		}
	}
  },
  tags: { type: [String], optional: true, autoform: { type: 'tags', afFieldInput: 'bootstrap-tags-input' } },
  createdAt: { type: Date, optional: true, autoform: { omit: true }, 
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
  updatedAt: { type: Date, autoform: { omit: true }, denyInsert: true, optional: true,
	autoValue: function() {
		if(this.isUpdate) {
			return new Date();
		}
	}
  }
};

BulletinSchema = new SimpleSchema(bulletinFields);

Bulletins.attachSchema(BulletinSchema);

Bulletins.allow({
	insert: function(userId, doc) {
		return true;
	},
	remove: function(userId, doc) {
		return true;
	},
	update: function(userId, doc) {
		return true;
	}
});

Bulletins.after.insert(function(userId, bulletin) {
	Mediator.publish('addTags', bulletin.tags, bulletin._id);
});