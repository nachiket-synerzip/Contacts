define([ 'jquery', 'underscore', 'backbone', 'text!templates/contactNewTpl.html', 'models/contact'],
		function($, _, Backbone, newContactTemplate, Contact) {

	var contactView = Backbone.View.extend({
		initialize: function(){
		},
		el: "#tabs-new",
		template : _.template(newContactTemplate),
		render: function() {
			this.$el.html(this.template());
			return this;
		},
		events: {
			"click #saveBtn": "saveContact",
			"click #clearBtn": "clearFields"
		},
		saveContact: function(){
			console.log($("#fieldName").val());
			var contact = new Contact({
				name: $("#fieldName").val(),
				mobile: parseInt($("#fieldMobile").val()),
				email: $("#fieldEmail").val(),
				address: $("#fieldAddress").val()
			});
			console.log("saving");
			//FIXME : The success and error callbacks not triggered
			contact.save(null, null, {
				success: function() {
					console.log("Successfully Saved " + contact.attributes.name);
					contact.collection.sync();
				},
				error: function(){
					console.log("Some error while saving contact!!");
				}
			});
			appView.contacts.add(contact);
		},
		clearFields: function(){
			console.log("clear fields");
			$("#fieldName").val("");
			$("#fieldMobile").val("");
			$("#fieldEmail").val("");
			$("#fieldAddress").val("");
		}
	});
	return contactView;
});
