define([ 'jquery', 'jquery_ui', 'underscore', 'backbone', 'text!templates/appTpl.html', 'collections/contacts', 'models/contact', 'views/contactView', 'text!templates/contactNewTpl.html', 'views/contactDelView'],
		function($, ui, _, Backbone, appTemplate, ContactCollection, Contact, ContactView, newContactForm, DelContactView) {

	var appView = Backbone.View.extend({

		template: _.template(appTemplate),

		initialize: function(){
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
				console.log(a);
				$("#del-contacts-list").append(a);
			});
		},

		renderNewContactsForm: function(){
			console.log(newContactForm);
			$("#tabs-new").html(newContactForm);
		},
		renderContacts: function(){
			$("#all-contacts-list").html("");
			this.contacts = new ContactCollection([
				{
					name: "Nachiket Kakatkar",
					mobile: 1234567891,
					email: "nachiket.kakatkar@synerzip.com",
					address: "Pune"
				},
				{
					name: "Nachiket2 Kakatkar2",
					mobile: 1234567892,
					email: "nachiket.kakatkar2@synerzip.com",
					address: "Pune2"					
				},
				{
					name: "Nachiket Kakatkar3",
					mobile: 1234567893,
					email: "nachiket.kakatkar3@synerzip.com",
					address: "Pune3"					
				},
				{
					name: "Nachiket Kakatkar4",
					mobile: 1234567894,
					email: "nachiket.kakatkar4@synerzip.com",
					address: "Pune4"					
				}
			]);
			console.log(this.contacts);
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