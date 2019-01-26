var express = require("express"); 
var app = express(); 
var request = require("request"); 
app.set("view engine", "ejs"); 

app.get("/", function(req, res) {
   res.send("Hello World!"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Started"); 
}); 