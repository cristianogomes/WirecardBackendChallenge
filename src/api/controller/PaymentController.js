class PaymentController {
  constructor(paymentService, buyerService) {
    this.paymentService = paymentService;
    this.buyerService = buyerService;
  }

  async createPayment(req, res) {
    try {
      const { client, buyer, payment } = req.body;

      const buyerInfo = await this.buyerService.findOrCreate(buyer);

      const paymentCreated = await this.paymentService.createPayment(
        client,
        buyerInfo,
        payment
      );

      return res.json(paymentCreated);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: err.message });
    }
  }

  async getById(req, res) {
    const { id } = req.params;
    const payments = await this.paymentService.findById(id);

    return res.json(payments);
  }
}

module.exports = PaymentController;
