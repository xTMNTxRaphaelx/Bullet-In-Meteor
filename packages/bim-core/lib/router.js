/* global WorldBulletinController */
/* global NewBulletinController */
/* global SingleBulletinController */
/* global Router */
Router.configure({
  layoutTemplate: 'mainLayout',
  loadingTemplate: 'spinner',
  notFoundTemplate: 'notFound',
  title: BiM.config.title
});

Router.route('/', {
  name: 'root',
  controller: WorldBulletinController,
  fastRender: true,
  title: BiM.config.worldPageTitle
});

Router.route('/:_id', {
  name: 'singlePost',
  controller: SingleBulletinController,
  fastRender: true,
  title: BiM.config.singlePageTitle
});
