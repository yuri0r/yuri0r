var express = require("express");
var url = require("url");
var http = require("http");
var app;

app = express();
http.createServer(app).listen(3000);

//making static files availeble
app.use(express.static(__dirname +'/public'));

app.get("/", function(req, res) {
  res.send("hey");
})


//just some fun stuff stolen from exampels at scool
app.get("/greetings", function(req, res) {
	var query = url.parse(req.url, true).query;
	var name = (query["name"] !== undefined) ? query["name"] : "Anonymous";
	res.send("Greetings " + name);
});
