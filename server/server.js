const path = require('path');
const http = require('http');

const express = require('express');
const socketIO = require('socket.io');

const pathPublic = path.join(__dirname, '/../public');

var port = process.env.PORT || 3000;
//console.log(pathPublic);
//console.log(__dirname + '/../public');

var app = express();


//-- middleware for static page 
app.use(express.static(pathPublic));

var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket) =>{
    console.log('New user connected');


    //-- emiting an newEmail event to client
    //-- socket emits on single connection 
    // socket.emit('newMessage',{
    //     from: 'Sanjeeev_sinha@hotmail.com',
    //     text: 'Testing new email',
    //     createdAt: 122
    // });

    socket.on('createMessage', (message) =>{
        console.log('created email event', message);

        //-- io emits message to every connection
        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()
        })
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });

});


//--listing at port 3000
server.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});