/*global define*/

(function(){
    'use strict';

    var __export = function(MainView){
        return {
            MainView: MainView
        };
    };

    // Expose the function to requirejs
    if (typeof define !== 'undefined') {
        define(['text!./views/main.tpl'], __export);
    }
})();
