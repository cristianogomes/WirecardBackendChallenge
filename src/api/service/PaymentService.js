const PaymentFactory = require('./PaymentFactory');

class PaymentService {
  constructor(paymentRepository) {
    this.paymentRepository = paymentRepository;
  }

  async createPayment(client, buyer, payment) {
    const paymentFactory = new PaymentFactory();
    const paymentService = paymentFactory.create(payment);

    const paymentData = paymentService.process();
    paymentData.buyersId = buyer.id;
    paymentData.clientId = client.id;

    return await this.paymentRepository.create(paymentData);
  }

  async findById(paymentId) {
    return await this.paymentRepository.findById(paymentId);
  }
}

module.exports = PaymentService;
