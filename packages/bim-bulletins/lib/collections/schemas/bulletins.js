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
        class: 'editor',
        settings: {
          toolbar: [
            //[groupname, [button list]]
             
            ['style', ['bold', 'italic', 'underline', 'clear']],
            ['font', ['strikethrough', 'superscript', 'subscript']],
            ['fontsize', ['fontsize']],
            ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['height', ['height']],
          ]
        }
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
  createdAt: {
    type: Date,
    optional: true,
    autoform: {
      omit: true
    }
  }
};

BulletinSchema = new SimpleSchema(bulletinFields);
