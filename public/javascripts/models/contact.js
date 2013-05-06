define(['backbone' ], function(Backbone) {
	var contactModel = Backbone.Model.extend({

		defaults : {
			name : "Contact Name Contact LastName",
			mobile : 0000000000,
			email : 'abc@def.com',
			address : '332, abc, def, hgskjgsk, fasfafafs-9852'
		},
		methodToURL: {
			'read': '/contacts/view/',
			'create': '/contacts/add',
			'update': '/contacts/update/',
			'delete': '/contacts/remove/'
		},
		parse: function(data){
			//console.log(data);
			return data;
		},
        validate: function(attrs, options) {
            if (!attrs.name) {
                return "Please enter name";
            } else if (!(attrs.mobile && (typeof attrs.mobile == "number") && attrs.mobile >= 1000000000)) {
                return "Please enter 10 digited mobile number";
            } else if (!attrs.email) {
                return "Please enter email id";
            } else if (!attrs.address) {
            	return "Please enter address";
            }
        },
        sync: function(method, model, options) {
        	options = options || {};
        	var url = model.methodToURL[method.toLowerCase()];
        	switch(url) {
        		case "create":
        		options.url = url;
        		break;
        		case "read":
        		case "update":
        		case "delete":
        		options.url = url + model.attributes.id;
        		break;
        		default:
        		options.url = url;
        		break;
        	}
        	Backbone.sync(method, model, options);
        }
	});
	return contactModel;
});
