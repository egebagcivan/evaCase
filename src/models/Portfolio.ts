import { DataTypes, Model, Association } from 'sequelize';
import sequelize from '../config/db.config';
import Share from './Share';
import PortfolioShares from './PortfolioShares';

/**
 * Represents a Portfolio in the database.
 * Each portfolio is associated with a unique user and can hold multiple shares.
 */
class Portfolio extends Model {
    public id!: number;
    public userId!: number;

    public readonly shares?: Share[];
    public static associations: {
        shares: Association<Portfolio, Share>;
    };

    /**
     * Checks if the portfolio has a specific share in a sufficient quantity.
     * @param symbol The symbol of the share to check.
     * @param quantity The quantity to compare against the portfolio's holding.
     * @returns A promise that resolves to true if the portfolio has enough shares, false otherwise.
     */
    public async hasShare(symbol: string, quantity: number): Promise<boolean> {
        const portfolioShare = await PortfolioShares.findOne({
            attributes: ['id', 'portfolioId', 'shareSymbol', 'quantity'],
            where: {
                portfolioId: this.id,
                shareSymbol: symbol
            }
        });

        if (!portfolioShare) return false;
        
        return portfolioShare.quantity >= quantity;
    }
}

Portfolio.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'Portfolio',
    timestamps: false
});

// Define many-to-many relationship with Share through PortfolioShares
Portfolio.belongsToMany(Share, { through: PortfolioShares, foreignKey: 'portfolioId' });
Share.belongsToMany(Portfolio, { through: PortfolioShares, foreignKey: 'shareSymbol' });

export default Portfolio;
