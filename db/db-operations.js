/**
 * 
 */

 var pg = require('pg')
 	,config = require('../config/dbConfigurations')
 	,conString = config.protocol + "://" + config.username + ":" + config.password + "@" + config.host + "/" + config.db
 	,client = null;
 
function getResultArrayForQuery(){
	console.log("you called me ");
} 
module.exports = {

	connect : function(cb){
		if(client !== null){
			cb(null);
			return;
		}
		client = new pg.Client(conString);
		client.connect(function(err){
			if(err){
				console.log("Connection failed due to Error : " + err.message);
				cb(err);
				return;
			}
			console.log("Succesfully connected");
			cb(null);
		});
	},
	getContactsAll : function (cb){
		var resultSet = [];
		var queryString = "SELECT * FROM contacts";
		var executeQuery = client.query(queryString);
		executeQuery.on("row",function(row){
			console.log("resultSet..." + row);
			resultSet.push(row);
		});
		executeQuery.on("error",function(){
			cb(404,"{}");
		});
		executeQuery.on("end",function(){
			cb(200,JSON.stringify(resultSet));
		});
	}	

};