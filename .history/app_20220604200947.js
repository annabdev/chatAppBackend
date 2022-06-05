const express = require("express");
const path = require("path");
const http = require("http");

const app = express();

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
console.log(`S`)