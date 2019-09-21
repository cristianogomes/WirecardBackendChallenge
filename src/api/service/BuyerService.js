class BuyerService {
  constructor(buyerRepository) {
    this.buyerRepository = buyerRepository;
  }

  async findOrCreate(buyer) {
    return await this.buyerRepository.findOrCreate(buyer);
  }
}

module.exports = BuyerService;
