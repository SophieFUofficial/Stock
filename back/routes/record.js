const express = require('express');
const router = express.Router();
const _ = require('lodash');
const url = 'mongodb://localhost:27017/Stock';
const mongoose = require('mongoose');
mongoose.connect(url);

const stockRecordModel = require('./model/stockRecord');

/**
 * Add Stock Record
 */
router.post('/add', function (req, res) {
    stockRecordModel.addOne(req.body, function (err) {
        if (err) {
            res.status(500).send({ errorCode: 500, errorMessage: 'Add Error' });
            throw err;
        } else {
            res.status(200).send({ result: 'success' });
        }
    })
});

module.exports = router;
