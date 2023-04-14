async function getTicker(exchange, symbol) {
  return await exchange.fetchTicker(symbol);
}

module.exports = {
  getTicker,
};
