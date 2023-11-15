import express from "express";
import { buyShares, sellShares } from "../controller/tradeController";

const router = express.Router();

router.post("/buy", buyShares);
router.post("/sell", sellShares);

export default router;
