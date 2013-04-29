define([ 'jquery', 'jquery_ui', 'underscore', 'backbone', 'text!templates/appTpl.html', 'collections/contacts', 'models/contact', 'views/contactView', 'views/contactNewView', 'views/contactDelView'],
		function($, ui, _, Backbone, appTemplate, ContactCollection, Contact, ContactView, NewContactView, DelContactView) {

	var appView = Backbone.View.extend({

		template: _.template(appTemplate),

		initialize: function(){
			this.contacts = new ContactCollection;
			this.contacts.fetch();
			var self = this;
			this.contacts.on("change", function(collection, response) {
				console.log("change");
				self.renderContacts();
				self.renderNewContactsForm();
				self.renderDeleteContactsForm();
			});
			this.contacts.on("reset", function(collection, response) {
				console.log("reset");
				self.renderContacts();
				self.renderNewContactsForm();
				self.renderDeleteContactsForm();
			});
		},

		contacts: {},

		render: function() {
			this.$el.html(this.template());
			$(function(){
				console.log($('#contacts-tabs'));
				$('#contacts-tabs').tabs();
			});
			this.renderContacts();
			this.renderNewContactsForm();
			this.renderDeleteContactsForm();
			return this;
		},
		
		renderDeleteContactsForm: function() {
			this.contacts.each(function(contact){
				var contactView = new DelContactView({
					model: contact
				});
				var a = contactView.render().el;
				//console.log(a);
				$("#del-contacts-list").append(a);
			});
		},

		renderNewContactsForm: function(){
			var newContactView = new NewContactView;
			newContactView.render();
		},
		renderContacts: function(){
			$("#all-contacts-list").html("");
			this.contacts.each(function(contact){
				var contactView = new ContactView({
					model: contact
				});
				var a = contactView.render().el;
				console.log(a);
				$("#all-contacts-list").append(a);
			});
		}
	});

	return appView;
});