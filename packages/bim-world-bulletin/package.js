/* global Package */
Package.describe({
  name: 'rahulgarg:bim-world-bulletin',
  version: '0.0.1',
  summary: 'Bullet in Meteor World Bulletin Package',
  git: 'https://github.com/xTMNTxRaphaelx/Bullet-In-Meteor.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@1.0");

  var packages = [
    'rahulgarg:bim-lib', //no dependencies
    'rahulgarg:bim-bulletins'
  ];
  
  api.use(packages);

  api.imply(packages);
  
  api.addFiles([
    'lib/controller.js'
  ], ['client', 'server']);
  
  api.addFiles([
    'server/publications.js'
  ], 'server');
  
  api.addFiles([
    'client/templates/world_bulletin.html',
    'client/templates/post_item.html'
  ], 'client');
  
  api.export('WorldBulletinController');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('rahulgarg:bim-world-bulletin');
  api.addFiles('bim-world-bulletin-tests.js');
});
