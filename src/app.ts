import express from "express";
import tradeRoutes from "./routes/tradeRoutes";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("EvaExchange Trading Game Backend");
});

app.use("/trade", tradeRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
