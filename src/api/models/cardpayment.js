'use strict';
module.exports = (sequelize, DataTypes) => {
  const CardPayment = sequelize.define(
    'CardPayment',
    {
      paymentId: DataTypes.INTEGER,
      holderName: DataTypes.STRING,
      number: DataTypes.INTEGER,
      expirationData: DataTypes.DATE
    },
    {
      hooks: {
        beforeCreate: function(cardPayment, options, fn) {
          cardPayment.number = cardPayment.number.slice(-4);
        }
      }
    }
  );
  CardPayment.associate = function(models) {
    CardPayment.belongsTo(models.Payment, {
      foreignKey: 'paymentId',
      as: 'payment'
    });
  };
  return CardPayment;
};
