/* global BulletinSchema */
/* global Mongo */
/* global Bulletins */
Bulletins = new Mongo.Collection('bulletins');
Bulletins.attachSchema(BulletinSchema);
