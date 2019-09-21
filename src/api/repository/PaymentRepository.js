const { PaymentType } = require('../consts');

class PaymentRepository {
  constructor(Payment, BoletoPayment, CardPayment) {
    this.Payment = Payment;
    this.BoletoPayment = BoletoPayment;
    this.CardPayment = CardPayment;
  }

  async create(payment) {
    const paymentSaved = await this.Payment.create(payment);

    if (payment.paymentTypeId === PaymentType.CARD) {
      payment.card.paymentId = paymentSaved.id;
      await this.CardPayment.create(payment.card);
    } else if (payment.paymentTypeId === PaymentType.BOLETO) {
      payment.boleto.paymentId = paymentSaved.id;
      await this.BoletoPayment.create(payment.boleto);
    }

    return paymentSaved;
  }

  async findById(paymentId) {
    return await this.Payment.findOne({
      where: {
        id: paymentId
      }
    });
  }
}

module.exports = PaymentRepository;
