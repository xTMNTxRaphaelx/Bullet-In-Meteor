/* global PostSchema */
/* global Mongo */
/* global Posts */
Posts = new Mongo.Collection('posts');
Posts.attachSchema(PostSchema);
