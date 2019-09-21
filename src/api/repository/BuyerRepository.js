class BuyerRepository {
  constructor(Buyer) {
    this.Buyer = Buyer;
  }

  async findOrCreate(buyer) {
    const existentBuyer = await this.Buyer.findOne({
      where: {
        cpf: buyer.cpf
      }
    });

    if (existentBuyer) {
      return existentBuyer;
    }

    return this.Buyer.create(buyer);
  }
}

module.exports = BuyerRepository;
