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
    'rahulgarg:bim-lib' //no dependencies
  ];
  
  api.use(packages);

  api.imply(packages);
  
  api.addFiles('bim-world-bulletin.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('rahulgarg:bim-world-bulletin');
  api.addFiles('bim-world-bulletin-tests.js');
});
