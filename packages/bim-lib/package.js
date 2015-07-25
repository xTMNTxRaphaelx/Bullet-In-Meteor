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
    'markdown',
    'accounts-base',
    'accounts-ui',
    'accounts-password',
    'accounts-facebook',
    'reactive-var',
    'spiderable',
    'stylus',
    'email',
    'iron:router',
    'twbs:bootstrap',
    'fortawesome:fontawesome',
    'aldeed:simple-schema',
    'aldeed:collection2',
    'aldeed:autoform',
    'yogiben:autoform-modals',
    'aldeed:template-extension',
    'sacha:spin',
    'mpowaga:autoform-summernote',
    'yogiben:autoform-tags',
    'ostrio:iron-router-title',
    'momentjs:moment',
    'matb33:collection-hooks',
    'hitchcott:paginator',
    'dburles:collection-helpers',
    'fastclick',
    'meteorhacks:fast-render',
//    'okgrow:iron-router-autoscroll',
    'matteodem:easy-search',
    'arkham:comments-ui',
    'voodoohop:masonrify',
    'kevohagan:sweetalert',
    'dburles:factory',
    'anti:fake',
    'fezvrasta:bootstrap-material-design',
    'arkham:comments-ui',
    'joshowens:shareit',
    'yogiben:favorites'
  ];
  
  api.use(packages);
  
  api.imply(packages);
  
  api.addFiles([
    'lib/core.js',
    'lib/config.js',
    'lib/utils.js'
  ], ['client', 'server']);
    
  api.export(['BiM', 'Mediator']);
});
