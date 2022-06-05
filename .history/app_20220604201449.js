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

*/

let roomId = "";

io.on("connection", (socket) => {
    socket.on("JOIN_ROOM", (room) => {
        roomId = room;
        socket.join(room);
    });
    socket.on("NEW_MESSAGE", (msg) => {
        io.to(roomId).emit("NEW_MESSAGE", msg);
    });
    socket.on ("disconnect", () => {
        activeUsers.delete(socket.userId);

        io.to(roomId).emit("user disconnected", socket.userId)
    });
});