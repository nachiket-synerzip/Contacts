define([ 'jquery', 'underscore', 'backbone', 'text!templates/contactTpl.html' ],
		function($, _, Backbone, contactTemplate) {

	var contactView = Backbone.View.extend({
		className: "contact-wrapper",
		
		template : _.template(contactTemplate),
		
		render: function() {
			console.log("rendering contact ");
			console.log(this.model.toJSON());
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});
	return contactView;
});
