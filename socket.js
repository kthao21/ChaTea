const io = require('socket.io')(3001);
const express = require('express');

io.on('connection', socket => {
    console.log(socket.id)
})
