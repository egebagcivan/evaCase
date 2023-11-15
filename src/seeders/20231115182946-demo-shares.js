"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Shares",
      [
        { symbol: "ABC", price: 100.0 },
        { symbol: "XYZ", price: 150.5 },
      ],
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Shares", null, {});
  },
};
