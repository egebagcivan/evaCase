import { Request, Response } from "express";
import Share from "../models/Share";
import Portfolio from "../models/Portfolio";
import PortfolioShares from "../models/PortfolioShares";
import { Sequelize } from "sequelize";

/**
 * Handles the buying of shares.
 * - Validates if the portfolio and share exist.
 * - Updates the quantity of shares in the portfolio if already exists, otherwise creates a new record.
 */
export const buyShares = async (req: Request, res: Response) => {
  const { portfolioId, symbol, quantity } = req.body;

  try {
    const portfolio = await Portfolio.findByPk(portfolioId);
    const share = await Share.findByPk(symbol);

    if (!portfolio) {
      return res.status(400).json({ message: "Portfolio not registered" });
    }

    if (!share) {
      return res.status(400).json({ message: "Share not registered" });
    }

    const existingPortfolioShare = await PortfolioShares.findOne({
      where: { portfolioId: portfolioId, shareSymbol: symbol },
    });

    if (existingPortfolioShare) {
      await existingPortfolioShare.update({
        quantity: existingPortfolioShare.quantity + quantity,
      });
    } else {
      await PortfolioShares.create({
        portfolioId: portfolioId,
        shareSymbol: symbol,
        quantity: quantity,
      });
    }

    return res.json({ message: "Shares bought successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error", error });
  }
};

/**
 * Handles the selling of shares.
 * - Validates if the portfolio and share exist and if there are sufficient shares to sell.
 * - Updates the portfolio shares by reducing the quantity.
 */
export const sellShares = async (req: Request, res: Response) => {
  const { portfolioId, symbol, quantity } = req.body;

  try {
    const portfolio = await Portfolio.findByPk(portfolioId);
    const share = await Share.findByPk(symbol);

    if (!portfolio) {
      return res.status(400).json({ message: "Portfolio not registered" });
    }

    if (!share) {
      return res.status(400).json({ message: "Share not registered" });
    }

    const portfolioShare = await PortfolioShares.findOne({
      where: { portfolioId: portfolio.id, shareSymbol: symbol },
    });

    if (!portfolioShare) {
      return res.status(400).json({ message: "Share not owned in the portfolio" });
    }

    if (portfolioShare.quantity < quantity) {
      return res.status(400).json({ message: "Insufficient shares to sell" });
    }

    await PortfolioShares.update(
      {
        quantity: Sequelize.literal(`quantity - ${quantity}`),
      },
      {
        where: { portfolioId: portfolio.id, shareSymbol: share.symbol },
      }
    );

    return res.json({ message: "Shares sold successfully" });
  } catch (error) {
    console.error("Error in sellShares:", error);
    return res
      .status(500)
      .json({
        message: "Server error during share sale",
        error: error,
      });
  }
};
