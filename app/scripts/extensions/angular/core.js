define(['aura_core', 'angular'], function(core){
    'use strict';

    var auraCore = Object.create(core);
    auraCore.angular = angular;
  
    return auraCore;
});
