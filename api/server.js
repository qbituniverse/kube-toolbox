'use strict';

const express = require("express");
const app = express();
const PORT = 80;
const HOST = "0.0.0.0";

const server = app.listen(PORT, HOST, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server running on http://" + host + ":" + port);
});

app.get("/api/ping", (req, res) => {
    res.set('Content-Type', 'text/plain');
    res.send("pong");
});

app.get("/api/client", (req, res) => {
    res.set('Content-Type', 'text/plain');
    res.send(getCallerIP(req));
});

app.get("/api/server", (req, res) => {
    res.set('Content-Type', 'application/json');
    res.send(server.address());
});

app.get("/api/timestamp", (req, res) => {
    res.set('Content-Type', 'text/plain');
    var date = new Date();
    res.send(date.toGMTString());
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