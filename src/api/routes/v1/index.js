const express = require('express');
const router = express.Router();

const PaymentRouter = require('./PaymentRoute');

router.use('/payment', PaymentRouter);

module.exports = router;
