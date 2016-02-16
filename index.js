var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var db = require('./config/db');

app.disable('x-powered-by');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var api = {};

api.skills = require('./modules/skills/routes');
app.use('/skills', api.skills);

api.skills = require('./modules/jobs/routes');
app.use('/jobs', api.skills);

/* Hello API */
app.get("/", function(req, resp) {
    resp.send("Hello stranger!");
});

module.exports = app;
