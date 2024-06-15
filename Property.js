const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Property', PropertySchema);
