export default class PortfolioDataProcessor {
  constructor(data) {
    this.data = data;
    this.processedData = []; // Initialize an empty array for storing processed data
  }

  setProcessedData(processedData) {
    this.processedData = processedData;
  }

  getProcessedData() {
    return this.processedData;
  }

  getTickerDetailData(ticker) {
    return this.processedData.find((item) => item.ticker === ticker);
  }

  transformPortfolioToDisplayFormat(portfolioItem) {
    const totalVolume = portfolioItem.transactions.reduce((acc, transaction) => acc + Number(transaction.quantity), 0);
    const totalCost = portfolioItem.transactions.reduce(
      (acc, transaction) => acc + transaction.pricePerUnit * transaction.quantity,
      0
    );
    const averageOpenPrice = totalCost / totalVolume;

    return {
      name: portfolioItem.name,
      ticker: portfolioItem.ticker,
      sector: portfolioItem.sector,
      currency: portfolioItem.currency,
      openPrice: averageOpenPrice.toFixed(2),
      totalVolume: totalVolume,
      totalCost: totalCost.toFixed(2),
      transactions: portfolioItem.transactions,
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
    const transformedData = this.data.holdings.map(this.transformPortfolioToDisplayFormat);
    const wholePortfolioValue = transformedData.reduce(
      (acc, item) => acc + Number(item.totalVolume) * Number(item.openPrice),
      0
    );
    this.processedData = this.calculatePortfolioPercent(transformedData, wholePortfolioValue);
    return this.processedData;
  }
}
