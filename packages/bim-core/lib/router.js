/* global WorldBulletinController */
/* global NewBulletinController */
/* global SingleBulletinController */
/* global Router */
Router.configure({
  layoutTemplate: 'mainLayout',
  loadingTemplate: 'spinner',
  notFoundTemplate: 'notFound'
});

Router.route('/', {
  name: 'root',
  controller: WorldBulletinController
});

Router.route('/new', {
  name: 'newPost',
  controller: NewBulletinController
});

Router.route('/:_id', {
  name: 'singlePost',
  controller: SingleBulletinController
});
