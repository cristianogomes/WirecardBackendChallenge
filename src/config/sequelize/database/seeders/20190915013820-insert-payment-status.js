'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'PaymentStatuses',
      [
        {
          description: 'Pendente',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: 'Pago',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: 'Cancelado',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: 'Recusado',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PaymentStatuses', null, {});
  }
};
