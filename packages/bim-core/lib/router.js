/* global WorldBulletinController */
/* global NewBulletinController */
/* global SingleBulletinController */
/* global Router */
Router.configure({
  layoutTemplate: 'mainLayout',
  loadingTemplate: 'spinner',
  notFoundTemplate: 'notFound',
  title: 'Bullet-In Meteor'
});

Router.route('/', {
  name: 'root',
  controller: WorldBulletinController,
  fastRender: true,
  title: 'BiM- World Bulletin'
});

Router.route('/:_id', {
  name: 'singlePost',
  controller: SingleBulletinController,
  fastRender: true,
  title: 'BiM- Single Bulletin'
});
