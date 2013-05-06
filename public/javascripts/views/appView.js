define([ 'jquery', 'jquery_ui', 'underscore', 'backbone', 'text!templates/appTpl.html', 'collections/contacts', 'models/contact', 'views/contactView', 'views/contactNewView', 'views/contactDelView'],
		function($, ui, _, Backbone, appTemplate, ContactCollection, Contact, ContactView, NewContactView, DelContactView) {

	var appView = Backbone.View.extend({

		template: _.template(appTemplate),

		initialize: function(){
			this.contacts = new ContactCollection;
			this.contacts.fetch();
			var self = this;
			this.contacts.on("add", function(model, collection, options) {
				/*console.log("add");
				console.log(model);
				console.log("==== add ====");*/
				self.renderContact(model);
				self.renderDeleteContact(model);
			});
			this.contacts.on("reset", function(collection, options) {
				/*console.log("reset");
				console.log(options);
				console.log("==== reset ====");*/
				self.renderContacts();
				self.renderDeleteContactsForm();
			});
			this.contacts.on("sync", function(model, response, options) {
				/*console.log("sync");
				console.log(model);
				console.log(response);
				console.log(options);
				console.log("===sync===");*/
				self.renderContacts();
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
		
		renderDeleteContact: function(contact) {
			var contactView = new DelContactView({
				model: contact
			});
			var a = contactView.render().el;
			//console.log(a);
			$("#del-contacts-list").append(a);
		},
		
		renderDeleteContactsForm: function() {
			$("#del-contacts-list").html("");
			var self = this;
			this.contacts.each(function(contact){
				self.renderDeleteContact(contact);
			});
		},

		renderNewContactsForm: function(){
			var newContactView = new NewContactView;
			newContactView.render();
		},
		
		renderContact: function(contact) {
			var contactView = new ContactView({
				model: contact
			});
			var a = contactView.render().el;
			//console.log(a);
			$("#all-contacts-list").append(a);			
		},
		renderContacts: function(){
			$("#all-contacts-list").html("");
			var self = this;
			this.contacts.each(function(contact){
				self.renderContact(contact);
			});
		}
	});

	return appView;
});