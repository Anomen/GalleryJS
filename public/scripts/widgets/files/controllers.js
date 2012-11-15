/*global define*/
(function(){
    'use strict';

    var __export = function(MainCtrl){
        return {
            MainCtrl: MainCtrl
        };
    };

    // Expose the function to requirejs
    if (typeof define !== 'undefined') {
        define(['./controllers/main'], __export);
    }
})();
