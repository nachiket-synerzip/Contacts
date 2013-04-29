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
			console.log(contact);
			contact.save();
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
