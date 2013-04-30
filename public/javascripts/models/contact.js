define(['backbone' ], function(Backbone) {
	var contactModel = Backbone.Model.extend({

		defaults : {
			name : "Contact Name Contact LastName",
			mobile : 0000000000,
			email : 'abc@def.com',
			address : '332, abc, def, hgskjgsk, fasfafafs-9852'
		},
		parse: function(data){
			console.log(data	);
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
        }
	});
	return contactModel;
});
