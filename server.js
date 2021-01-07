var express = require('express');
var path = require('path');
var app = express();
var port = 8081;

//selecting all public files in directory
app.use(express.static(__dirname + '/'));

//creating a server on port 8080
app.listen(port, function(){
    console.log('Listening to Port '+port)
});
app.get('/', function(request, response){
    response.sendFile(path.join(__dirname + '/d3.html'))
});