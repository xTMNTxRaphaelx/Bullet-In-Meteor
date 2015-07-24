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
    autoform: {
      omit: true
    }
  }
};

BulletinSchema = new SimpleSchema(bulletinFields);
