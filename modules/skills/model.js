var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	name: { type: String, required: true },
    level: { type: Number, default: 0 },
	description: { type: String, default: '' }
});

module.exports = mongoose.model('Skill', schema);
