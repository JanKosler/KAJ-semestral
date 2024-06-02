export default class PortfolioDataProcessor {
  constructor(data) {
    this.data = data;
  }

  transformPortfolioToDisplayFormat(portfolioItem) {
    const totalVolume = portfolioItem.transactions.reduce((acc, transaction) => acc + Number(transaction.quantity), 0);
    console.log(portfolioItem.ticker + ' ' + totalVolume);
    const totalCost = portfolioItem.transactions.reduce(
      (acc, transaction) => acc + transaction.pricePerUnit * transaction.quantity,
      0
    );
    const averageOpenPrice = totalCost / totalVolume;

    // Placeholder for current market price, you may want to update this dynamically
    // const currentMarketPrice = 200; // This value should be dynamic or passed when calling this method

    // const grossPL = (currentMarketPrice - averageOpenPrice) * totalVolume;

    return {
      name: portfolioItem.name,
      ticker: portfolioItem.ticker,
      sector: portfolioItem.sector,
      currency: portfolioItem.currency,
      openPrice: averageOpenPrice.toFixed(2),
      totalVolume: totalVolume,
      totalCost: totalCost.toFixed(2),
      transactions: portfolioItem.transactions,
      /*marketPrice: currentMarketPrice.toFixed(2),
      grossPL: grossPL.toFixed(2),
      */
    };
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  calculatePortfolioPercent(items, wholePortfolioValue) {
    return items.map((item) => {
      const percent = ((Number(item.totalVolume) * Number(item.openPrice)) / wholePortfolioValue) * 100;
      return {
        ...item,
        portfolioPercent: percent.toFixed(2),
        color: this.getRandomColor(),
      };
    });
  }

  processData() {
    console.log(this.data.holdings);
    const transformedData = this.data.holdings.map(this.transformPortfolioToDisplayFormat);

    const wholePortfolioValue = transformedData.reduce(
      (acc, item) => acc + Number(item.totalVolume) * Number(item.openPrice),
      0
    );
    console.log(wholePortfolioValue);
    return this.calculatePortfolioPercent(transformedData, wholePortfolioValue);
  }
}
