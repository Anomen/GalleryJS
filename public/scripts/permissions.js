/*global define*/
define(['aura_perms'], function(permissions) {
  'use strict';

  permissions.extend({
      folders: {
          'layout:ready': true
      },
      files: {
          'layout:ready': true,
          'folders:retrieve': true
      },
      layout: {
      }
  });

  return permissions;
});

