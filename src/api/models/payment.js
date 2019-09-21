'use strict';
module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define(
    'Payment',
    {
      amount: DataTypes.DOUBLE,
      paymentTypeId: DataTypes.INTEGER,
      clientId: DataTypes.INTEGER,
      buyersId: DataTypes.INTEGER,
      paymentStatusId: DataTypes.INTEGER
    },
    {}
  );
  Payment.associate = function(models) {
    Payment.belongsTo(models.Buyer, { foreignKey: 'buyersId', as: 'buyer' });

    Payment.belongsTo(models.PaymentType, {
      foreignKey: 'paymentTypeId',
      as: 'type'
    });

    Payment.belongsTo(models.PaymentStatus, {
      foreignKey: 'paymentStatusId',
      as: 'status'
    });
  };
  return Payment;
};
