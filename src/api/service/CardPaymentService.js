const { PaymentStatus, PaymentType } = require('../consts');

class CardPaymentService {
  constructor(paymentData) {
    this.paymentData = paymentData;
  }

  process() {
    return {
      amount: this.paymentData.amount,
      paymentTypeId: PaymentType.CARD,
      paymentStatusId: PaymentStatus.PENDENTE,
      card: {
        holderName: 'string',
        number: '1234123412341234',
        expirationDate: '01/01',
        cvv: '999'
      }
    };
  }
}

module.exports = CardPaymentService;
