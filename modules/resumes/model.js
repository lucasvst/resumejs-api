var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	name: { type: String, required: true },
    skills: { type: String, required: true },
    jobs: { type: String, required: true }
});

module.exports = mongoose.model('Job', schema);
