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
    'lib/router.js'
  ], ['client', 'server']);

  api.addFiles([
    'lib/client/shared/layouts/main_layout.html',
    'lib/client/shared/access_denied.html',
    'lib/client/shared/main.html',
    'lib/client/shared/not_found.html',
  ], 'client');

  api.export('Posts');

});
