const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recordSchema = new Schema({
    id: String,
    name: {
        type: String,
        required: true,
    },
    stockId: {
        type: String,
        required: true,
    },
    recordDate: {
        type: Date,
        default: Date.now(),
    },
    recordUser: String,
    price: {
        type: Number,
        default: 0,
    },
});

recordSchema.statics.addOne = function(data, cb) {
    return this.create(data, cb);
};

const model = mongoose.model('Record', recordSchema, 'record');

module.exports = model;

