var app = require('express')();
var http = require('http').createServer(app);

//init a new instance of socket.io by passing in http server object
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html');
});

//listen for the connection event
io.on("connection", function(socket){
    /*console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');*/
    socket.on('chat message', function(msg){
        console.log('message: '+msg);
    }); 
});

http.listen(3000, function(){
    console.log('listening on *:3000');
})