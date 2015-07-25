Package.describe({
  name: 'rahulgarg:bim-transitions',
  version: '0.0.1',
  summary: 'Page trnasition package',
  git: 'https://github.com/xTMNTxRaphaelx/Bullet-In-Meteor.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  
  var packages = [
    'rahulgarg:bim-lib' //no dependencies
  ];
  
  api.use(packages);

  api.imply(packages);
  
  api.addFiles([
    
  ], 'client');
});