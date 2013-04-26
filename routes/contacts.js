/*
* Handler for contacts/all
*/
var json = [
{"name":"Sadik Rupani","mobile" : 9570174236, "emai" : "afb@synerzip.com", "address" : "Pune"},
{"name":"Sadik Rupani","mobile" : 9570174236, "emai" : "afb@synerzip.com", "address" : "Pune"},
{"name":"Sadik Rupani","mobile" : 9570174236, "emai" : "afb@synerzip.com", "address" : "Pune"},
{"name":"Sadik Rupani","mobile" : 9570174236, "emai" : "afb@synerzip.com", "address" : "Pune"},
{"name":"Sadik Rupani","mobile" : 9570174236, "emai" : "afb@synerzip.com", "address" : "Pune"},
] ;


exports.all = function(request,response){
	response.send(json);
};

exports.add = function(request,response){
	response.send("Add new contact");
};

exports.remove = function(request,response){
	response.send("Remove contact");
};