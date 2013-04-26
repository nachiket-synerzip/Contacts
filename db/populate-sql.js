/**
 * 
 */
 
 var http = require("http")
 	,pg = require("pg");
 
 
 http.createServer().listen("4000");
 
 var conString = "postgres://postgres:password@localhost/contacts";
 
 var client = new pg.Client(conString);
 client.connect(function(err){
 	if(err) 
 		console.log("Failed to connect database : " + err.message);
 	else
 		console.log("Connected");
 });
 
 var create_table = 'CREATE TABLE IF NOT EXISTS "contacts"("id" SERIAL, "name" VARCHAR(30), "mobile" VARCHAR(20),"email" VARCHAR(30), "address" VARCHAR(50),PRIMARY KEY("id"))';
 
 client.query(create_table,function(err){
 	if(err)
 		console.log("Failed to create table. Error: " +  err.messge);
 });
 console.log("Table created ... ");
 
 client.query("INSERT INTO contacts (name,mobile,email,address) VALUES ('Nachiket ','9876543210','sadik@gmail.com','Pune-31') ");
 client.query("INSERT INTO contacts (name,mobile,email,address) VALUES ('Amit Patel','9876543210','amit@gmail.com','Pune-32') ");
 client.query("INSERT INTO contacts (name,mobile,email,address) VALUES ('Rohit Ghatol','9876521210','rohit@gmail.com','Pune-33') ");
 client.query("INSERT INTO contacts (name,mobile,email,address) VALUES ('Sagar Sawant','9878746210','sagar@gmail.com','Pune-34') ");
 client.query("INSERT INTO contacts (name,mobile,email,address) VALUES ('Sudeep Raiker','9876549876','sudeep@gmail.com','Pune-35') ");
 client.query("INSERT INTO contacts (name,mobile,email,address) VALUES ('Abhay Joshi','9876846310','abhay@gmail.com','Pune-36') ");
 client.query("INSERT INTO contacts (name,mobile,email,address) VALUES ('Sandeep Mirashi','9578443210','sandeep@gmail.com','Pune-37') ");
 client.query("INSERT INTO contacts (name,mobile,email,address) VALUES ('Kumar Gaurav','9157843210','kumar@gmail.com','Pune-38') ");
 
 console.log("Rows are inserted");
 
 
 
 