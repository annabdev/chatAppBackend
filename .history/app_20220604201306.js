const express = require("express");
const path = require("path");
const http = require("http");
const { join } = require("path");
const { isObject } = require("util");

const app = express();

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
console.log('Server listening to PORT: ', PORT);
server.listen(PORT);

const activeUsers = new Set();

let roomI = "";

io.on("connection", (socket) => {
    socket.on("JOIN_ROOM", (room) => {
        roomId = room;
        socket.join(room);
    });
    socket.on("NEW_MESSAGE", (msg) => {
        io.to(roomId)
    })
})