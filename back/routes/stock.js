const express = require('express');
const router = express.Router();
const _ = require('lodash');
const url = 'mongodb://localhost:27017/Stock';
const mongoose = require('mongoose');
mongoose.connect(url);

const stockModel = require('./model/stock');

/**
 * Add Stock
 */
router.post('/add', function (req, res) {
    stockModel.checkAdd(req.body, function (err, stocks) {
        if (err) {
            res.status(500).send({ errorCode: 500, errorMessage: 'Add Error' });
            throw err;
        }
        if (stocks.length) {
            res.status(202).send({ errorCode: 202, errorMessage: 'The record already exists' });
        } else {
            stockModel.addOne(req.body, function (err) {
                if (err) {
                    res.status(500).send({ errorCode: 500, errorMessage: 'Add Error' });
                    throw err;
                } else {
                    res.status(200).send({ result: 'success' });
                }
            });
        }
    });
});

/**
 * Stock List
 */
router.get('/list', function (req, res) {
    stockModel.queryByCondition(req.query, function (err, stocks) {
        if (err) {
            res.status(500).send({ errorCode: 500, errorMessage: 'Find Error' });
            throw err;
        } else {
            res.status(200).send({ result: 'success', data: stocks });
        }
    })
});

module.exports = router;
