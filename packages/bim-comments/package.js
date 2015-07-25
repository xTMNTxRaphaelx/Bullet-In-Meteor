/* global Package */
Package.describe({
  name: 'rahulgarg:bim-comments',
  version: '0.0.1',
  summary: 'Comments Package for app',
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
  
  api.addFiles([
    'lib/client/template.js'
  ], 'client');
});
