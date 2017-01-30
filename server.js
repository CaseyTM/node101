var http = require("http");
// console.log(http);
var server = http.createServer((req, res)=>{
	console.log(req.rawHeaders[1]);

res.writeHead(200, {'content-type':'text/html'});

	res.end("<h1>Hello, Friend</h1>");

});
var port = 8000;
console.log("Server listening on" + port + "for connections...");

server.listen(8000);