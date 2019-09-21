'use strict';
module.exports = (sequelize, DataTypes) => {
  const PaymentStatus = sequelize.define(
    'PaymentStatus',
    {
      description: DataTypes.STRING
    },
    {}
  );
  PaymentStatus.associate = function(models) {};
  return PaymentStatus;
};
