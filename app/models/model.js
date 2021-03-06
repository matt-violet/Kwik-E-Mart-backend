module.exports = (sequelize, Sequelize) => {
  const Grocery = sequelize.define("grocery", {
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    type: {
      type: Sequelize.STRING
    },
    image: {
      type: Sequelize.STRING
    },
    price: {
      type: Sequelize.DECIMAL(10, 2)
    },
    qty: {
      type: Sequelize.INTEGER
    },
  });

  return Grocery;
};