Package.describe({
  name: 'rahulgarg:bim-tags',
  version: '0.0.1',
  summary: 'Tags package, used internally.',
  git: 'https://github.com/xTMNTxRaphaelx/Bullet-In-Meteor.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  
  api.versionsFrom(['METEOR@1.0']);
  
  var packages = [
    'rahulgarg:bim-lib' //no dependencies 
  ];

  api.use(packages);

  api.imply(packages);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('rahulgarg:bim-tags');
  api.addFiles('bim-tags-tests.js');
});
