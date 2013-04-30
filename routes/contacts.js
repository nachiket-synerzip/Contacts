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


var dbOperations = require('../db/db-operations')
	,http = require("http")
	,url = require("url")
	,util = require("../utility/util");

dbOperations.connect(
	function(err){
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
	},
	
	respondForAdd : function(req,res){
		util.getObjectFromHtmlBody(req,function(object){
			keys = util.getObjectKeys(object);
			values = util.getObjectValues(object);
			dbOperations.addNewContact(keys,values,function(code,string){
				res.send(code,string);
			});
			//console.log(keys + "\n" + values);
			//res.send(200,object);
		});
	},
	respondForView : function(req,res){
		dbOperations.getContactsForId(req.params.id,function(code,string){
			res.set({'Content-Type':'application/json'});
			res.send(code,string);
		});
		
	},
	respondForUpdate : function(req,res){
		 util.getObjectFromHtmlBody(req,function(object){
		 	var f_a_v = util.createFieldsAndValues(object);
		 	dbOperations.updateContactsForId(req,f_a_v,function(code,string){
		 		res.send(code,string);
		 	});	
		 	
		 });
	},
	respondForDelete : function(req,res){
		console.log("Remove contact");
		res.send("Remove contact");
	}
}