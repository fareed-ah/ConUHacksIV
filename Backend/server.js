//Import libraries
var express = require("express"); 
var request = require("request"); 
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const logger = require("morgan");
const Data = require("./data"); 

const API_PORT = 3001;
const app = express();
const router = express.Router();

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
router.get("/getData", (req, res) => {
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
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
router.post("/putData", (req, res) => {
  let data = new Data();

  const { id, address, price} = req.body;

  if ((!id && id !== 0) || !address || !price) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }
  data.address = address;
  data.price = price; 
  data.id = id;
  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// append /api for our http requests
app.use("/api", router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));