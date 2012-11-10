// Define call just to make enforceDefine check happy
define(function() {

  'use strict';

  // Aura configuration object is separate from require.config so we can have
  // access to it in src/aura/base.js
  require.aura = {

    // [RequireJS](http://requirejs.org/) 2.0+ plus has error callbacks (errbacks)
    // which provide per-require error handling. To utilize this feature
    // enforceDefine must be enabled and non-AMD dependencies must be shimmed.
    //enforceDefine: true,

    // Override the config for the i18n module ID
    // Uncomment to load the french i18n bundle for widgets
    // locale: 'fr-fr',

    baseUrl: 'scripts',

    // Uncomment if you would like to support cache busting
    // urlArgs: "bust=v2",

    deps: ['app'],

    // shim underscore(lodash) & backbone (cause we use the non AMD versions here)
    shim: {
      'dom': {
        exports: '$',
        // switch to the DOM-lib of your choice
        // Could be either 'jquery' or 'zepto';
        deps: [ 'jquery' ]
      },
      'underscore': {
        exports: '_'
      },
      'zepto': {
        exports: 'Zepto'
      },
      'deferred': {
        exports: 'Deferred',
        deps: ['dom']
      },
    },

    // paths
    paths: {
      // jQuery
      jquery: 'vendor/aura/lib/jquery/jquery',

      // Zepto
      zepto: 'vendor/aura/lib/zepto/zepto',
      deferred: 'vendor/aura/lib/zepto/deferred',

      // Underscore (Lo-Dash - http://lodash.com)
      underscore: 'vendor/aura/lib/lodash',

      // Set the base library
      dom: 'vendor/aura/lib/dom',

      // Aura
      aura_base: 'vendor/aura/base',
      aura_core: 'vendor/aura/core',
      aura_perms: 'vendor/aura/permissions',
      aura_sandbox: 'vendor/aura/sandbox',
      
      // Angular Extension
      //core: 'extensions/angular/core',
      //sandbox: 'extensions/angular/sandbox',
      angular: 'extensions/angular/lib/angular',
      
      // Requirejs plugins
      text: 'vendor/require/text',

      //// Backbone Extension
      //core: '../../../extensions/backbone/core',
      //sandbox: '../../../extensions/backbone/sandbox',
      //text: '../../../extensions/backbone/lib/text',
      //backbone: '../../../extensions/backbone/lib/backbone',
      //i18n: '../../../i18n',
      //localstorage: '../../../extensions/backbone/lib/localstorage',
      //fullcalendar: '../../../extensions/backbone/lib/fullcalendar.min',
      //jquery_ui: '../../../extensions/backbone/lib/jquery-ui.min',

      // App
      perms: 'permissions'
    }

  };

  require.config( require.aura );

});
