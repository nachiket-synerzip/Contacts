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
		var sqlStatement = "SELECT * FROM contacts";
		var executeQuery = client.query(sqlStatement);
		executeQuery.on("row",function(row){
			resultSet.push(row);
		});
		executeQuery.on("error",function(){
			cb(404,"{}");
		});
		executeQuery.on("end",function(){
			cb(200,JSON.stringify(resultSet));
		});
	},
	getContactsForId : function(id,cb){
		var resultSet = [];
		var sqlStatement = "SELECT * FROM contacts WHERE id=" + id;
		var executeQuery = client.query(sqlStatement);
		executeQuery.on("row",function(row){
			resultSet.push(row);
		});
		executeQuery.on("error",function(){
			cb(404,"{}");
		});
		executeQuery.on("end",function(){
			cb(200,JSON.stringify(resultSet));
		}); 
		
	},
	updateContactsForId : function(req,string,cb){
		var sqlStatement = "UPDATE contacts SET "+ string + " WHERE id=" + req.params.id;
		client.query(sqlStatement,function(err,result){
			if(err){
				cb(404,"{}");
			}else
			{
				var string = result.rowCount + " row updated" ;
				console.log(string);
				cb(200,string);
			}
		});
	},
	addNewContact : function(keys,values,cb){
		var sqlStatement = "INSERT INTO contacts (" + keys + ") VALUES (" + values +") RETURNING id";
		client.query(sqlStatement,function(err,result){
			if(err){
				cb(404,"{}");
			}else{
				console.log(result);
				var string = JSON.stringify({"id":result.rows[0].id});
				cb(200,string);
			}
		});
	},
	deleteContactForId : function(req,cb){
		var sqlStatement = "DELETE FROM contacts WHERE id="+req.params.id;
		client.query(sqlStatement,function(err,result){
			if(err){
				cb(404,"{}");
			}else{
				var string = result.rowCount + " row deleted"; 
				cb(200,string);
			}
			
		
		});
	}	

};