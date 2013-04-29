/*
* Handler for contacts/all

var json = [
{"name":"Sadik Rupani","mobile" : 9570174236, "emai" : "afb@synerzip.com", "address" : "Pune"},
{"name":"Sadik Rupani","mobile" : 9570174236, "emai" : "afb@synerzip.com", "address" : "Pune"},
{"name":"Sadik Rupani","mobile" : 9570174236, "emai" : "afb@synerzip.com", "address" : "Pune"},
{"name":"Sadik Rupani","mobile" : 9570174236, "emai" : "afb@synerzip.com", "address" : "Pune"},
{"name":"Sadik Rupani","mobile" : 9570174236, "emai" : "afb@synerzip.com", "address" : "Pune"},
] ;
 
*/


var dbOperations = require('../db/db-operations');
dbOperations.connect(
	function(err){
	console.log(err);
		if(err){
			console.log("Contacts==>Error : " + err.message);
			return;
		}
		console.log("Succesfully initialized DB");
	}
);
module.exports = {

	respondForAll : function(req,res){
		dbOperations.getContactsAll(function(code,string){
			res.set({'Content-Type':'application/json'});
			res.send(code,string);
		});
		//res.send("Show all the contacts");
		
	},
	
	respondForAdd : function(req,res){
		res.send("Add new contact");
	},
	respondForView : function(req,res){
		var id = req.params.id;
		console.log("Show results for " + id);
		res.send("Show results for " + id);
	},
	respondForUpdate : function(req,res){
		var id = req.params.id;
		console.log("Update " + id);
		res.send("Update " + id);
	},
	respondForDelete : function(req,res){
		console.log("Remove contact");
		res.send("Remove contact");
	}
}