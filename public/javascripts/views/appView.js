define([ 'jquery', 'underscore', 'backbone', 'text!templates/appTpl.html', 'models/contact', 'views/courseView' ],
		function($, _, Backbone, appTemplate, ContactsModel, CourseView) {

	var appView = Backbone.View.extend({
	
		template : _.template(appTemplate),
		
		initialize: function(){
			this.render();
		},
		
		render: function() {
							
			this.$el.html(this.template());
					
			//Create model instance
			var course1 = new ContactsModel({
				name : "Hello World",
				email : "abc123@def456.com",
				mobile : 1234567890,
				address : "abc no.123, efjakjfka, fajfhja, oioioo"
			});

			//Create view
			var course1View = new CourseView({
				model: course1
			});


			//Render view on HTML page
			this.$("#course-list").append(course1View.render().el);

					
			return this;
		}
	});
	
	return appView;
});
