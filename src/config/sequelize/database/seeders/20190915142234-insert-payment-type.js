'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'PaymentTypes',
      [
        {
          description: 'Boleto',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: 'Cartão',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PaymentTypes', null, {});
  }
};
