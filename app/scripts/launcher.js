// Define call just to make enforceDefine check happy
define(function() {

  'use strict';

  // Aura configuration object is separate from require.config so we can have
  // access to it in src/aura/base.js
  require.aura = {

      // [RequireJS](http://requirejs.org/) 2.0+ plus has error callbacks (errbacks)
      // which provide per-require error handling. To utilize this feature
      // enforceDefine must be enabled and non-AMD dependencies must be shimmed.
      enforceDefine: true,
  
      // Override the config for the i18n module ID
      // Uncomment to load the french i18n bundle for widgets
      // locale: 'fr-fr',
  
      baseUrl: 'scripts',
  
      // Uncomment if you would like to support cache busting
      // urlArgs: "bust=v2",
  
      deps: ['app'],
  
      shim: {
          'dom': {
              exports: '$',
              deps: [ 'jquery' ]
          },
          'underscore': {
              exports: '_'
          }
      },
  
      // paths
      paths: {
          // jQuery
          jquery: 'vendor/jquery/jquery-1.8.2',
  
          // Underscore (Lo-Dash - http://lodash.com)
          underscore: 'vendor/underscore/lodash-0.9.2',
  
          // Aura
          aura_base    : 'vendor/aura/base',
          aura_core    : 'vendor/aura/core',
          aura_perms   : 'vendor/aura/permissions',
          aura_sandbox : 'vendor/aura/sandbox',
          dom          : 'vendor/aura/dom',
          
          // Requirejs plugins
          text: 'vendor/require/text',
  
          // App
          perms: 'permissions'
      },
  };

  require.config( require.aura );

});
