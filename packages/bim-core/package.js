/* global Package */
Package.describe({
  name: 'rahulgarg:bim-core',
  version: '0.0.1',
  summary: 'Bullet in Meteor core package',
  git: 'https://github.com/xTMNTxRaphaelx/Bullet-In-Meteor.git',
  documentation: 'README.md'
});

Package.onUse(function (api) {

  api.versionsFrom("METEOR@1.0");

  var packages = [
    'rahulgarg:bim-lib', //no dependencies,
    'rahulgarg:bim-world-bulletin' // World Bulletin Page 
  ];

  api.use(packages);

  api.imply(packages);


  api.addFiles([
//    'lib/shared/collections/schemas/posts.js',
//    'lib/shared/collections/posts.js',
//    'lib/shared/controllers/base.js',
//    'lib/shared/controllers/main_page.js',
//    'lib/shared/controllers/new_post.js',
//    'lib/shared/controllers/signle_post.js',
//    'lib/shared/methods/posts.js',
    'lib/shared/router.js'
  ], ['client', 'server']);

  api.addFiles([
//    'lib/server/publications.js'
  ], 'server');

  api.addFiles([
//    'lib/client/posts/templates/new_post.html',
//    'lib/client/posts/templates/new_post.js',
//    'lib/client/posts/templates/post_item.html',
//    'lib/client/posts/templates/post_page.html',
//    'lib/client/posts/templates/posts_list.html',
    'lib/client/shared/layouts/main_layout.html',
    'lib/client/shared/access_denied.html',
    'lib/client/shared/main.html',
    'lib/client/shared/not_found.html',
  ], 'client');

  api.export('Posts');

});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('rahulgarg:bim-core');
  api.addFiles('bim-core-tests.js');
});
