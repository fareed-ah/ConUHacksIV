//Import libraries
var express = require("express");
var request = require("request");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var mongodb = require('mongodb');
const logger = require("morgan");
const Data = require("./data");
var cors = require("cors"); 


const API_PORT = 3001;
const app = express();
const router = express.Router();

app.use(cors()); 

//mlab database URL
const dbRoute = "mongodb://sahilsharma356:Sahil_742995@ds135800.mlab.com:35800/shfa-db";

//connect to mlab database
mongoose.connect(
	dbRoute,
	{useNewUrlParser: true}
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to database"));

//check if connection to database successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(logger("dev"));


// this is our get method
// this method fetches all available data in our database
// router.get("/getData", (req, res) => {
//   Data.find((err, data) => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true, data: data });
//   });
// });

var MongoClient = mongodb.MongoClient;
var db_name = 'shfa-db';
var url = "mongodb://sahilsharma356:Sahil_742995@ds135800.mlab.com:35800/shfa-db";

app.get('/getData', function(req, res){
	MongoClient.connect(url, {useNewUrlParser: true },function(err, client) {

		var db = client.db("shfa-db");

		db.collection('shfas').find().sort({$natural:-1}).toArray(function(err, data){
			if(err){
				return res.json({ success: false, error: err });
			} else if (data.length){
				console.log('Found: ', data);
				// res.status(200).send(JSON.stringify(data));
				return res.json({ success: true, data: data });
			} else {
				console.log('No Document(s) found with defined "find" criteria!');
			}
			client.close();
		});
	});
});

// this is our update method
// this method overwrites existing data in our database
router.post("/updateData", (req, res) => {
  const { id, update } = req.body;
  Data.findOneAndUpdate(id, update, err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// this is our delete method
// this method removes existing data in our database
router.delete("/deleteData", (req, res) => {
  const { id } = req.body;
  Data.findOneAndDelete(id, err => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

// this is our create method
// this method adds new data in our database
// router.post("/putData", (req, res) => {
//   let data = new Data();
//   const { id, address, price} = req.body;

//   if ((!id && id !== 0) || !address || !price) {
//     return res.json({
//       success: false,
//       error: "INVALID INPUTS"
//     });
//   }
//   data.address = address;
//   data.price = price; 
//   data.id = id;
//   data.save(err => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true });
//   });
// });

router.post("/getData", function(req,res){
	var id = req.body.id; 
	var address = req.body.address; 
	var price = req.body.address; 
	var newListing = {id:id, address:address, price:price}; 
	shfas.push(newListing); 
	return res.json({ success: true }); 
});

// append /api for our http requests
app.use("/api", router);

//get data from api.
router.get("/results", function(req,res){
	var title = "harry potter";
	var url = "http://www.omdbapi.com/?s=" + title + "&apikey=thewdb";
	request(url,function(error, response, body){
       if(!error && response.statusCode == 200){
           var data= JSON.parse(body)
           console.log(data);
       }
   });
});

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
