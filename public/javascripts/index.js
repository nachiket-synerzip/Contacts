require.config({
    baseUrl : "/javascripts/",
    paths : {
        jquery : 'libs/jquery/jquery-1.9.1.min',
        underscore : 'libs/underscore/underscore',
        backbone : 'libs/backbone/backbone0.9.10',
        text : 'libs/require/text'
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    }
});

require([ 'backbone', '/javascripts/views/contactView.js'],
    function(Backbone, ContactView) {

        contactView = new ContactView({
            el: $("#page-content")
        });

        var ContactRouter = Backbone.Router.extend({

            routes: {
                "contact/:name": "contactByName",  // #search/HTML5
            },

            contactByName: function(query) {
                console.log("contactByName");
            }

        });
        var contactRouter = new ContactRouter;
        contactRouter.on("route:contactByName", function(name) {
        	console.log("name = " + name);
        });
        Backbone.history.start();
    }
);

