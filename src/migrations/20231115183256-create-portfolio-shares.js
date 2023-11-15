"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("PortfolioShares", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      portfolioId: {
        type: Sequelize.INTEGER,
        references: { model: "Portfolios", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      shareSymbol: {
        type: Sequelize.STRING(3),
        references: { model: "Shares", key: "symbol" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("PortfolioShares");
  },
};
