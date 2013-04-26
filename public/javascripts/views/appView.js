define([ 'jquery', 'underscore', 'backbone', 'text!templates/appTpl.html', 'collections/contacts', 'models/contact', 'views/contactView'],
		function($, _, Backbone, appTemplate, ContactCollection, Contact, ContactView) {

	var appView = Backbone.View.extend({

		template : _.template(appTemplate),

		initialize: function(){
			this.render();
		},

		render: function() {
			this.$el.html(this.template());
			console.log("Should render contacts");
			this.renderContacts();
			return this;
		},
		
		renderContacts: function(){
			this.$("#contacts-list").html("");
			var contacts = new ContactCollection([
				{
					name: "Nachiket Kakatkar",
					mobile: 9766125893,
					email: "nachiket.kakatkar@synerzip.com",
					address: "Pune"
				},
				{
					name: "Nachiket2 Kakatkar2",
					mobile: 9766125892,
					email: "nachiket.kakatkar2@synerzip.com",
					address: "Pune2"					
				},
				{
					name: "Nachiket Kakatkar3",
					mobile: 97661258933,
					email: "nachiket.kakatkar3@synerzip.com",
					address: "Pune3"					
				},
				{
					name: "Nachiket Kakatkar4",
					mobile: 97661258934,
					email: "nachiket.kakatkar4@synerzip.com",
					address: "Pune4"					
				}
			]);
			console.log(contacts);
			contacts.each(function(contact){
				var contactView = new ContactView({
					model: contact
				});
				this.$("#contacts-list").append(contactView.render().el);
				console.log(contactView.render().el);
			});
		}
	});

	return appView;
});