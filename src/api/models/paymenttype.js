'use strict';

const BOLETO = 1;
const CARD = 2;

module.exports = (sequelize, DataTypes) => {
  const PaymentType = sequelize.define(
    'PaymentType',
    {
      description: DataTypes.STRING
    },
    {}
  );
  PaymentType.associate = function(models) {};

  return PaymentType;
};
