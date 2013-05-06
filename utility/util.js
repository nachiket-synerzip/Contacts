module.exports = {
	getObjectFromHtmlBody : function(req,cb){
		var data = "";
		if(req.headers["content-type"] == "application/json") {
			cb(req.body);
			return;
		}
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
	},
	getObjectValues : function(o){
		var arr = [];
			for(var k in o){
				arr.push("'"+o[k]+"'");
			}
		return arr;
	},
	getObjectKeys : function(o){
		return Object.keys(o);
	}
}