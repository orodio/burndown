//* @jsx React.DOM
// jshint node:true, strict:true, eqeqeq:true, freeze:true, newcap:false
// jshint nonbsp:true, immed:true, indent:2, latedef:false, quotmark:double
// jshint unused:true, maxdepth:3, maxlen:80, maxcomplexity:5

"use strict";

var app         = require("express")();
var compression = require("compression");
var sp          = __dirname + "/static/";
var port        = Number( process.env.PORT || 5000 );

app.use(compression());

function send(name) {
  return function(x, res) {
    res.sendFile(sp + name);
  };
}

app.get("/", send("index.html"));

app.listen(port, console.log.bind(null, "Port: " + port));
