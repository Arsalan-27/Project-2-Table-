const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: { type: String },
    quantity: { type: Number }
});

const userModel = mongoose.model('Item' , itemSchema);
module.exports = userModel

