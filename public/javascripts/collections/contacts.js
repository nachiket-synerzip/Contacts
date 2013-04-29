define(['parse', 'models/contact' ], function(Parse, ContactModel) {

    var contactCollection = Parse.Collection.extend({
        model: ContactModel,
        //url: "/contacts/all",
        selected_model: null
    });

    return contactCollection;
});