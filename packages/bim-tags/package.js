/* global Package */
Package.describe({
  name: 'rahulgarg:bim-tags',
  version: '0.0.1',
  summary: 'Tags package, used internally.',
  git: 'https://github.com/xTMNTxRaphaelx/Bullet-In-Meteor.git',
  documentation: 'README.md'
});

Package.onUse(function (api) {

  api.versionsFrom(['METEOR@1.0']);

  var packages = [
    'rahulgarg:bim-lib' //no dependencies 
  ];

  api.use(packages);

  api.imply(packages);

  api.addFiles([
    'lib/schema/tags.js',
    'lib/tags.js',
    'lib/methods/tags.js'
  ], ['client', 'server']);

  api.addFiles([
    'lib/server/publications.js'
  ], 'server');

  api.export('Tags');
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('rahulgarg:bim-tags');
  api.addFiles('bim-tags-tests.js');
});
