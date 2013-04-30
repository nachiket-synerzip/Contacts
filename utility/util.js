var util = require("util");

var getObjectKeys = function(o){
		return Object.keys(o);
}
var getObjectValues = function(o){
	var arr = [];
	for(var k in o){
		arr.push(o[k]);
	}
	return arr;
}

module.exports = {
	getObjectFromHtmlBody : function(req,cb){
		var data = "";
		req.on("data",function(chunk){
			data += chunk;
		}).on("end",function(){
			cb(JSON.parse(data));
		});
		
	},
	createFieldsAndValues : function(object){
		var arr=[];
		for(var k in object){
			arr.push(k + "=" +"'" +object[k]+ "'");
		}
		return arr.toString();
	}
}