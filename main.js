var express = require("express");
var url = require("url");
var http = require("http");
var https = require('https');
var fs = require('fs');
var app;

app = express();

var options = {
  key: fs.readFileSync('/etc/letsencrypt/live/yurinullr.ddns.net/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/yurinullr.ddns.net/cert.pem'),
  ca: fs.readFileSync('/etc/letsencrypt/live/yurinullr.ddns.net/chain.pem')}

https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("hello world\n");
}).listen(443);

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
