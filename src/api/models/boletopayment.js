'use strict';
module.exports = (sequelize, DataTypes) => {
  const BoletoPayment = sequelize.define(
    'BoletoPayment',
    {
      paymentId: DataTypes.INTEGER,
      number: DataTypes.STRING
    },
    {}
  );
  BoletoPayment.associate = function(models) {
    BoletoPayment.belongsTo(models.Payment, {
      foreignKey: 'paymentId',
      as: 'payment'
    });
  };
  return BoletoPayment;
};
