const { PaymentStatus, PaymentType } = require('../consts');

class BoletoPaymentService {
  constructor(paymentData) {
    this.paymentData = paymentData;
  }

  process() {
    return {
      amount: this.paymentData.amount,
      paymentTypeId: PaymentType.BOLETO,
      paymentStatusId: PaymentStatus.PENDENTE,
      boleto: {
        number: '99999999999999999999999999999999999999999999999'
      }
    };
  }
}

module.exports = BoletoPaymentService;
