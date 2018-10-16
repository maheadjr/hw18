var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/websnips";
//var dbo = db.db("project3");

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
 
  // //creates collection within DB
  var dbo = db.db("websnips");
  // dbo.createCollection("snippets", function(err, res) {
  //   if (err) throw err;
  //   console.log("Collection created!");
  //   db.close();
  // });

//   //inserts info into DB
  var snippet =     { title: 'unknown', link: 'unknown'} ;
  dbo.collection("snippets").insertOne(snippet, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });

  // MongoClient.connect(url, function(err, db) {
  //   if (err) throw err;
  //   var dbo = db.db("mydb");
  //   var myobj = { name: "Company Inc", address: "Highway 37" };
  //   dbo.collection("customers").insertOne(myobj, function(err, res) {
  //     if (err) throw err;
  //     console.log("1 document inserted");
  //     db.close();
  //   });


});
