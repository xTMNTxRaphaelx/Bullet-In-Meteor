Package.describe({
  name: 'rahulgarg:bim-bulletins',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Bulletins package for application',
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
    'lib/collections/schemas/bulletins.js',
    'lib/collections/bulletins.js',
    'lib/controllers/new_bulletin.js',
    'lib/controllers/single_bulletin.js',
    'lib/methods/bulletins.js'
  ], ['client', 'server']);
  
  api.addFiles([
    'server/publications.js'
  ], 'server');
  
  api.addFiles([
    'client/templates/bulletin_page.html',
    'client/templates/new_bulletin.html',
    'client/templates/new_bulletin.js'
  ], 'client');
  
  api.export(['Bulletins', 'NewBulletinController', 'SingleBulletinController'])
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('rahulgarg:bim-bulletins');
  api.addFiles('bim-bulletins-tests.js');
});
