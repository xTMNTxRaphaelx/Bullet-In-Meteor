/* global Package */
Package.describe({
  name: 'rahulgarg:bim-lib',
  version: '0.0.1',
  summary: 'Bullet-In Meteor libraries',
  git: 'https://github.com/xTMNTxRaphaelx/Bullet-In-Meteor.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  
  var packages= [
    'standard-app-packages',
    'service-configuration',
    'accounts-ui',
    'accounts-base',
    'accounts-password',
    'accounts-twitter',
    'accounts-facebook',
    'reactive-var',
    'email',
    'aldeed:simple-schema@1.3.3',
    'aldeed:collection2@2.3.3',
    'sacha:autoform@5.1.2',
    'aldeed:template-extension@3.4.3',
    'fourseven:scss@2.1.1',
    'iron:router@1.0.9',
    'twbs:bootstrap',
    'ian:accounts-ui-bootstrap-3'
  ];
  
  api.use(packages);
  
  api.imply(packages);
  
  api.addFiles('bim-lib.js');
  
  api.export('BiM');
});
//
//Package.onTest(function(api) {
//  api.use('tinytest');
//  api.use('rahulgarg:bim-lib');
//  api.addFiles('bim-lib-tests.js');
//});
