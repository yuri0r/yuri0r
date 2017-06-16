//server
var express = require("express");
var httpsApp = express();
var httpApp = express();
//https
var https = require('https');
var fs = require('fs');
//http
http = require('http');

var options = {
  key: fs.readFileSync('/etc/letsencrypt/live/yuri0r.ddns.net/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/yuri0r.ddns.net/cert.pem'),
  ca: fs.readFileSync('/etc/letsencrypt/live/yuri0r.ddns.net/chain.pem')
}
//https server
https.createServer(options, httpsApp).listen(443);
httpsApp.use(express.static(__dirname +'/public'));

//http redirect
http.createServer(httpApp).listen(3000);
httpApp.get('/', function(req, res){
	res.redirect('https://yurinullr.ddns.net' + req.url);
});



