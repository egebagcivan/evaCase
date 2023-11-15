"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "PortfolioShares",
      [
        { portfolioId: 17, shareSymbol: "ABC", quantity: 10 },
        { portfolioId: 18, shareSymbol: "EGE", quantity: 5 },
      ],
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("PortfolioShares", null, {});
  },
};
