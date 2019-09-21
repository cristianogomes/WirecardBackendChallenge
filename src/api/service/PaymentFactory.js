const { PaymentType } = require('../consts');

const BoletoPayment = require('./BoletoPaymentService');
const CardPayment = require('./CardPaymentService');

class PaymentFactory {
  create(paymentData) {
    if (paymentData.type === PaymentType.BOLETO) {
      return new BoletoPayment(paymentData);
    }

    if (paymentData.type === PaymentType.CARD) {
      return new CardPayment(paymentData);
    }

    throw new Error('Invalid payment type');
  }
}

module.exports = PaymentFactory;
