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
    'lib/collection.js',
    'lib/tags.js'
  ], ['client', 'server']);

  api.addFiles([
    'lib/server/publications.js'
  ], 'server');
  
  api.addFiles([
    'lib/client/template.html',
    'lib/client/template.js'
  ], 'client');

  api.export('Tags');
});