const mongoose = require('mongoose'); const DestinationSchema = new mongoose.Schema({ name: { type: String, required: true }, description: { type: String, required: true }, photos: [{ type: String }], map: { type: String, required: true } }); module.exports = mongoose.model('Destination', DestinationSchema);