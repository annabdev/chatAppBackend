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

let roomId = "";

/* Creating socket connection
    A socket is one endpoint of a two-way comm link between
    two programs running on the network.
*/

io.on("connection", (socket) => {
  /* Joining room for conversation */
    socket.on("JOIN_ROOM", (room) => {
        roomId = room;
        socket.join(room);
    });

    /* To emit an event from your client, use the 'emit' function
        on the socket object
        To handle these events, the the 'on' function on the
        socket object
        Create an event 
    socket.on("NEW_MESSAGE", (msg) => {
        io.to(roomId).emit("NEW_MESSAGE", msg);
    });
    socket.on ("disconnect", () => {
        activeUsers.delete(socket.userId);

        io.to(roomId).emit("user disconnected", socket.userId)
    });
});