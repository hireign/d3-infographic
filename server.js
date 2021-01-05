var express = require('express');
var path = require('path');
var app = express();

//selecting all public files in directory
app.use(express.static(__dirname + '/'));

//creating a server on port 8080
app.listen(8081, function(){
    console.log('Listening to Port 8081')
});
app.get('/', function(request, response){
    response.sendFile(path.join(__dirname + '/d3.html'))
});

app.get('/d3', function(request, response){
    response.sendFile(path.join(__dirname + '/d3.html'))
});

//please run this file using command: "node server.js"