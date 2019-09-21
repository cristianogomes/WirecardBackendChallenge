'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Payments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      amount: {
        type: Sequelize.DOUBLE
      },
      clientId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      paymentTypeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'PaymentTypes',
          key: 'id'
        }
      },
      buyersId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Buyers',
          key: 'id'
        }
      },
      paymentStatusId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'PaymentStatuses',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Payments');
  }
};
