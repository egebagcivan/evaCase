const express = require('express');
const app = express();
import sequelize from "./src/config/sequelize";

app.use(express.json());

app.get('/', (req, res) => {
  res.send('EvaExchange API Running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const HOST = process.env.HOST;

await sequelize.authenticate();
    console.log("Database Connection has been established successfully.");
    await sequelize.sync({ force: false, alter: false, logging: false });
    console.log("Database Synced.");
    console.log(HOST);
