requirejs.config({
    paths: {
        'signals': 'extensions/router/lib/signals',
        'hasher' : 'extensions/router/lib/hasher'
    }
});

define(['./lib/crossroads', 'hasher'], function(crossroads, hasher){
    'use strict';
    
    //setup hasher
    function parseHash(newHash, oldHash){
        crossroads.parse(newHash);
    }

    var router = {};
    router.routes = {};
    router.on = function(path, fn){
        if (typeof router.routes[path] === 'undefined')
            router.routes[path] = crossroads.addRoute(path);

        router.routes[path].matched.add(fn);
        router.routes[path].greedy = true;

        if (router.routes[path].match("/" + hasher.getHash())){
            hasher.initialized.add(parseHash); //parse initial hash
            hasher.changed.add(parseHash); //parse hash changes
            hasher.init(); //start listening for history change
        }
    };


    return router;
});
