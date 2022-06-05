cont http = require("http");
const express = require("express");

const app = express()
const server = http.createServer(app)
const io =socketio(server)

const PORT = process.env.PORT || 500