'use strict'; 

(function(angular){

    // Create the angular architecture as adviced here:
    // http://docs.angularjs.org/guide/module
    angular.module('core.service'   , []);
    angular.module('core.directive' , []);
    angular.module('core.filter'    , []);
    angular.module('core', ['core.service', 'core.directive', 'core.filter']);

})(angular);
