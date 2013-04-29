define([ 'jquery', 'underscore', 'backbone', 'text!templates/contactTpl.html' ],
		function($, _, Backbone, contactTemplate) {

	var contactView = Backbone.View.extend({
		tagName: 'li',
		className: 'contact-list-item',
		template : _.template(contactTemplate),
		
		render: function() {
			console.log("rendering contact ");
			console.log(this.model.toJSON());
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},
		events: {
			'click': function() {
				if(this.model.collection.selected_model !== null) {
					this.model.collection.selected_model.$el.toggleClass("contact-list-item-show-all");
				}
				this.model.collection.selected_model = this;
				this.$el.toggleClass("contact-list-item-show-all");
			}
		}
	});
	return contactView;
});
