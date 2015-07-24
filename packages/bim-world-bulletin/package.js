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
    'lib/world-bulletin.js',
    'lib/controllers.js'
  ], ['client', 'server']);
  
  
  api.addFiles([
    'lib/client/template.html',
    'lib/client/template.js'
  ], 'client');
  
  api.export('WorldBulletinController');
});