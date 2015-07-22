/* global Package */
Package.describe({
  name: 'rahulgarg:bim-lib',
  version: '0.0.1',
  summary: 'Bullet-In Meteor libraries',
  git: 'https://github.com/xTMNTxRaphaelx/Bullet-In-Meteor.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@1.0']);
  
  var packages= [
    'standard-app-packages',
    'service-configuration',
    'accounts-base',
    'accounts-ui',
    'accounts-password',
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
    'sacha:spin@0.2.4',
    'useraccounts:unstyled@1.8.1',
  ];
  
  api.use(packages);
  
  api.imply(packages);
  
  api.addFiles([
    'lib/core.js',
    'lib/utils.js',
    'lib/config.js'
  ], ['client', 'server']);
    
  api.export('BiM');
});
