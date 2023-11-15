# EvaExchange

EvaExchange is an educational trading simulation game developed by Super Traders. It is designed to educate users about share trading in a simulated, controlled environment.

## Features

- Registration of shares with unique symbols.
- Hourly updates of share prices.
- Management of user portfolios for trading simulations.
- RESTful API endpoints for BUY and SELL operations.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js
- PostgreSQL
- TypeScript
- Sequelize CLI

### Installation

Follow these steps to set up the project:

1. Clone the repository:
   ```bash
   git clone https://github.com/egebagcivan/evaCase.git
2. Install NPM packages:
   ```bash
   npm install
3. Configure your PostgreSQL database as per the project requirements. Add your DB credentials to .env file.
4. Run the Sequelize migrations:
   ```bash
   npx sequelize-cli db:migrate
5. Run the Sequelize seeder:
   ```bash
   npx sequelize-cli db:seed:all
6. Start the application:
   ```bash
   ts-node src/app.ts

## Usage

Here's how you can use the API to perform trading operations:

### Buy Shares

- Endpoint: POST /trade/buy
- Payload:
  ```bash
  {
  "portfolioId": 1,
  "symbol": "ABC",
  "quantity": 10
  }
- Description: This endpoint allows users to buy shares.

### Sell Shares

- Endpoint: POST /trade/sell
- Payload:
  ```bash
  {
  "portfolioId": 1,
  "symbol": "EGE",
  "quantity": 5
  }
- Description: This endpoint allows users to sell shares.

### Test Cases

1. Buy Shares with Valid Portfolio
  - Test buying shares with a valid portfolio ID and share symbol.
  - Expected outcome: Shares are added to the portfolio.
2. Sell Shares with Sufficient Quantity
  - Test selling shares with sufficient quantity in the portfolio.
  - Expected outcome: Shares are deducted from the portfolio.
3. Buy Shares with Non-Existent Portfolio
  - Test buying shares with a non-existent portfolio ID.
  - Expected outcome: Error indicating the portfolio is not registered.
