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
    'rahulgarg:bim-lib', //no dependencies
    'rahulgarg:bim-comments'
  ];
  
  api.use(packages);

  api.imply(packages);
  
  api.addFiles([
    'lib/collection.js',
    'lib/controllers.js',
    'lib/bulletins.js'
  ], ['client', 'server']);
  
  api.addFiles([
    'lib/server/publications.js'
  ], 'server');
  
  api.addFiles([
    'lib/client/template.html',
    'lib/client/template.js'
  ], 'client');
  
  api.export(['Bulletins', 'SingleBulletinController'])
});
