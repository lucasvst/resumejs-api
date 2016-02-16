var express = require('express');
var router = express.Router();
var Job = require('./model');

router.get('/', function(req, res) {
    Job.find({}, function(err, data) {
        if (err) {
            res.sendStatus(500);
        } else {
            res.json(data);
        }
    });
});

router.get('/:id', function(req, res) {
    var query = { _id: req.params.id };

    Job.findOne(query, function(err, data) {
        if (err || data == null) {
            res.sendStatus(404);
        } else {
            res.json(data);
        }
    });
});

router.post('/', function(req, res) {
    var job = new Job(req.body);

    job.save(function(err, data) {

        console.log(data);

        if (err) {
            res.status(400).json(err);
        } else {
            res.status(201).json(data);
        }
    });
});

router.put('/:id', function(req, res) {
    var query = { _id: req.params.id };
    var mod = req.body;
    delete mod._id;

    Job.update(query, mod, function(err, data) {
        if (err) {
            res.status(400).json(err);
        } else {
            res.json(data);
        }
    });
});

router.delete('/:id', function(req, res) {
    var query = { _id: req.params.id };

    Job.remove(query, function(err, data) {
        if (err) {
            res.status(400).json(err);
        } else {
            res.json(data);
        }
    });
});

module.exports = router;
