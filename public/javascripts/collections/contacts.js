define(['backbone', 'models/contact' ], function(Backbone, ContactModel) {

    var contactCollection = Backbone.Collection.extend({
        model: ContactModel,
        url: "/contacts/all",
        selected_model: null
    });

    return contactCollection;
});