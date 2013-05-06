define([ 'jquery', 'underscore', 'backbone', 'text!templates/contactDelTpl.html' ],
		function($, _, Backbone, contactDelTemplate) {

	var contactView = Backbone.View.extend({
		tagName: 'li',
		className: 'contact-list-item',
		template : _.template(contactDelTemplate),
		
		render: function() {
			//console.log("rendering del contact ");
			//console.log(this.model.toJSON());
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},
		events: {
			'click': function() {
				//console.log(this.model.collection);
			}
		}
	});
	return contactView;
});