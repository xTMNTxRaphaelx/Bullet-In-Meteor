/* global SimpleSchema */
/* global BulletinSchema */
var bulletinFields = {
  title: {
    type: String,
    label: 'Title'
  },
  body: {
    type: String,
    label: 'Description',
    autoform: {
      afFieldInput: {
        type: 'summernote',
        class: 'editor'
      }
    }
  },
  _id: {
    type: String,
    optional: true,
    autoform: {
      omit: true
    }
  },
  userId: {
    type: String,
    optional: true,
    autoform: {
      omit: true
    }
  },
  author: {
    type: String,
    optional: true,
    autoform: {
      omit: true
    }
  },
  tags: {
    type: [String],
    optional: true,
    autoform: {
      type: 'tags',
      afFieldInput: 'bootstrap-tags-input'
    }
  },
  createdAt: {
		type: Date,
		optional: true,
		autoValue: function() {
			if(this.isInsert) {
				return new Date();
			} else if(this.isUpsert) {
				return {$setOnInsert: new Date()};
			} else {
				this.unset();
			}
		},
    autoform: {
      omit: true
    }
	},
	updatedAt: {
		type: Date,
		autoValue: function() {
			if(this.isUpdate) {
				return new Date();
			}
		},
    autoform: {
      omit: true
    },
		denyInsert: true,
		optional: true
	}
};

BulletinSchema = new SimpleSchema(bulletinFields);
