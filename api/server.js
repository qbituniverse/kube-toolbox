'use strict';

const express = require("express");
const app = express();
const PORT = 80;
const HOST = '0.0.0.0';

app.get("/api/ping", (req, res) => {
    res.set('Content-Type', 'text/plain');
    res.send("pong");
});

app.get("/api/ip", (req, res) => {
    res.set('Content-Type', 'text/plain');
    res.send(getCallerIP(req));
});

app.get("/api/timestamp", (req, res) => {
    res.set('Content-Type', 'text/plain');
    var date = new Date();
    res.send(date.toGMTString());
});

app.listen(PORT, HOST, () => {
    console.log("Server running on port 80");
});

function getCallerIP(req) {
    var ip = req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
    ip = ip.split(',')[0];
    ip = ip.split(':').slice(-1);
    return ip;
}