/* global WorldBulletinController */
/* global NewPostController */

/* global SinglePostController */
/* global Router */
Router.configure({
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
