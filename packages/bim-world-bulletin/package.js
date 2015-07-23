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
    'lib/methods.js',
    'lib/controller.js'
  ], ['client', 'server']);
  
  
  api.addFiles([
    'lib/client/templates.html',
    'lib/client/templates.js',
    'lib/client/subscribe.js'
  ], 'client');
  
  api.export('WorldBulletinController');
});