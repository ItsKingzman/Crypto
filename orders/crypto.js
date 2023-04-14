async function createMarketBuyOrder(exchange, symbol, amount) {
  return await exchange.createMarketBuyOrder(symbol, amount);
}

async function createMarketSellOrder(exchange, symbol, amount) {
  return await exchange.createMarketSellOrder(symbol, amount);
}

module.exports = {
  createMarketBuyOrder,
  createMarketSellOrder,
};
