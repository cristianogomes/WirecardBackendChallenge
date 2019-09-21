const express = require('express');
const router = express.Router();

const { Payment, Buyer, BoletoPayment, CardPayment } = require('../../models');
const { PaymentRepository, BuyerRepository } = require('../../repository');
const { PaymentService, BuyerService } = require('../../service');
const PaymentController = require('../../controller/PaymentController');

const paymentRepository = new PaymentRepository(
  Payment,
  BoletoPayment,
  CardPayment
);
const paymentService = new PaymentService(paymentRepository);
const buyerRepository = new BuyerRepository(Buyer);
const buyerService = new BuyerService(buyerRepository);

const paymentController = new PaymentController(paymentService, buyerService);

router.get('/:id', (req, res) => paymentController.getById(req, res));
router.post('/', (req, res) => paymentController.createPayment(req, res));

module.exports = router;
