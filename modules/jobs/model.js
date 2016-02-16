var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	company: { type: String, required: true },
    position: { type: String, required: true },
    startAt: { type: Date },
	endAt: { type: Date },
    description: { type: String, default: '' }
});

module.exports = mongoose.model('Job', schema);
