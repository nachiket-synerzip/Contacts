define(['backbone', 'models/contact' ], function(Backbone, ContactModel) {

    var contactCollection = Backbone.Collection.extend({
        model: ContactModel
    });

    return contactCollection;
});