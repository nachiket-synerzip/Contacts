require.config({
    baseUrl : "/javascripts/",
    paths : {
        jquery : 'libs/jquery/jquery-1.9.1.min',
        jquery_ui : 'libs/jquery/jquery-ui',
        underscore : 'libs/underscore/underscore',
        backbone : 'libs/backbone/backbone0.9.10',
        text : 'libs/require/text',
        parse: 'libs/parse/parse-1.2.7'
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
		'parse': {
			exports: 'Parse'
        }
    }
});

require([ 'backbone', 'views/appView', 'parse'],
    function(Backbone, AppView, Parse) {
        Parse.initialize("imGQuj86wPWYNQdGcdpdkIsJMZkVEV6LylNUXpTw", "NHK3akgw0rnlfhLWEuPDqoleG52VXQqKg4lRFSRO");
        appView = new AppView({
            el: $("#page-content")
        });
        appView.render();
    }
);

