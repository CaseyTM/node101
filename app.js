
// Include the http module, it is a part of core so no install needed. 
var http = require("http");
var fs = require("fs");
// Include the FS module (File System)

// Set up an http server and store it in the server variable
// The callback will run anytime someone hits the port the server is listening for.
function renderHomePage(request, response){
		response.writeHead(200,{'content-type':'text/html'});
		var theHomePageHTML = fs.readFileSync('homePage.html');
		response.end(theHomePageHTML);
		// THE MANUAL WAY WITHOUT FS BELOW 
		// response.write('<h1> This is the home page. </h1>');
		// response.write('<p> I\'m very proud of my node routing ability.</p>');
		// response.write('<p> I made a page in node, so there.</p>');
		// response.end();

}
var server = http.createServer((request, response)=>{

	console.log("Someone connected");
	// the url requested is in the request ojbect , url property
	console.log(request.url);
	if(request.url === '/'){
		renderHomePage(request, response);
	}else if(request.url === '/logo.png'){
		var img = fs.readFileSync('logo.png');
		response.writeHead(200,{'content-type': 'image/png'});
		response.end(img, 'binary');
	}else{
		response.writeHead(404,{'content-type':'text/html'});
		response.end('Sorry this page does not exist');
	}
	// Res.end will close the connection so the browser knows when we are finished.

});
// Tell the server we created to listen to port 8001
server.listen(8001);
console.log("Server is listening for HTTP traffic at port 8001...");