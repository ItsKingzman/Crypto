// Import necessary libraries and modules
const Alpaca = require("@alpacahq/alpaca-trade-api");
const tradingStrategy = require("./src/strategy");
const { logError } = require("./utils/crypto");
const { getTicker } = require("./data/crypto");
const { createMarketBuyOrder, createMarketSellOrder } = require("./orders/crypto");

// Configure the exchange with your API keys
const alpaca = new Alpaca({
  keyId: "AKY0VYVWEEBP9OED89WL",
  secretKey: "uohO4HXLdeEwLV2jT9oXmb0WtFY9Q9uCXlM5DA5m",
  paper: true, // Use the paper trading environment; change to false for live trading
  usePolygon: false, // Set to true if you have a Polygon.io subscription
});

// Main function
async function main() {
    try {
      setInterval(
        () =>
          tradingStrategy(
            alpaca, // Replace 'exchange' with 'alpaca'
            getTicker,
            createMarketBuyOrder,
            createMarketSellOrder
          ),
        5000
      ); // Execute the trading strategy every minute
    } catch (error) {
      logError(error);
    }
  }

main();
