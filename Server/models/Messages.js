const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    content: String,
    from: String, // Changed from ObjectId to String
    to: String, // Changed from ObjectId to String
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Message', messageSchema);
