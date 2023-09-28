const express = require("express");
const app = express();
const path = require('path');

const http = require("http").Server(app);
const port = process.env.PORT || 3001

const io = require("socket.io")(http);

io.on("connection", (socket) => {
  console.log(socket.id);
});
