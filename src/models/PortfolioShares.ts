import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db.config";

/**
 * Model representing a Portfolio's shares.
 * This model links a Portfolio to a Share and tracks the quantity of the Share held in the Portfolio.
 */
class PortfolioShares extends Model {
    public id?: number;
    public portfolioId!: number;
    public shareSymbol!: string;
    public quantity!: number;
  }

PortfolioShares.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    portfolioId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Portfolios",
        key: "id",
      },
    },
    shareSymbol: {
      type: DataTypes.STRING(3),
      references: {
        model: "Shares",
        key: "symbol",
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "PortfolioShares",
    timestamps: false,
  }
);

export default PortfolioShares;
