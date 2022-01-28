const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stockSchema = new Schema({
    id: String,
    name: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
    },
    description: String,
    type: String,
    priority: Number,
}, { versionKey: false });

stockSchema.statics.checkAdd = function (data, cb) {
    // 判断当前数据库中是否有跟需要添加的数据name或者code相同的数据
    return this.find({
        $or: [
            { name: data.name },
            { code: data.code }
        ],
    }, cb);
};

stockSchema.statics.addOne = function(data, cb) {
    return this.create(data, cb);
};

stockSchema.statics.queryByCondition = function (query, cb) {
    return this.find(query, cb);
};

const model = mongoose.model('Stock', stockSchema, 'stock');

module.exports = model;

