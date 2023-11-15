import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db.config";

/**
 * Model representing a Share in the market.
 * It stores the symbol and the current price of the share.
 */
class Share extends Model {
  public symbol!: string;
  public price!: number;
}

Share.init(
  {
    symbol: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      validate: {
        is: /^[A-Z]{3}$/, // Validates that the symbol consists of 3 uppercase letters
      },
    },
    price: {
      type: DataTypes.DECIMAL(10, 2), // Validates that the price is a decimal value with 2 decimal places
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
  },
  {
    sequelize,
    modelName: "Share",
    timestamps: false,
  }
);

export default Share;
