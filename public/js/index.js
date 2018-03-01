var socket = io();
socket.on('connect', function() {
    console.log('Connected to server');

    // socket.emit('createMessage', {
    //     from: 'Sanjeeev_sinha@hotmail.com',
    //     text: 'Testing created email',
    //     createdAt: 12345
    // });
});

socket.on('disconnect', function () {
    console.log('Dis Connected from server');
});

//-- listing newEmail event on client
socket.on('newMessage', function (message) {
    console.log('new Message', message);
});



