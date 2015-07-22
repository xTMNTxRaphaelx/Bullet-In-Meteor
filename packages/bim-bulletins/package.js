Package.describe({
  name: 'rahulgarg:bim-bulletins',
  version: '0.0.1',
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
    'lib/server/publications.js'
  ], 'server');
  
  api.addFiles([
    'lib/client/templates/bulletin_page.html',
    'lib/client/templates/new_bulletin.html',
    'lib/client/templates/bulletin_item.html',
    'lib/client/templates/new_bulletin.js'
  ], 'client');
  
  api.export(['Bulletins', 'NewBulletinController', 'SingleBulletinController'])
});
