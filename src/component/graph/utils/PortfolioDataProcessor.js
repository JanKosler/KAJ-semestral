/* Exporting a class named PortfolioDataProcessor */
export default class PortfolioDataProcessor {
  /* Constructor initializes with data and sets up an empty array for processed data */
  constructor(data) {
    this.data = data;
    this.processedData = [];
  }

  /* Method to update the processed data array */
  setProcessedData(processedData) {
    this.processedData = processedData;
  }

  /* Method to retrieve the processed data */
  getProcessedData() {
    return this.processedData;
  }

  /* Method to get detailed data for a specific ticker */
  getTickerDetailData(ticker) {
    return this.processedData.find((item) => item.ticker === ticker);
  }

  /* Method to check if the processed data is empty */
  isDataEmpty() {
    return this.processedData.length === 0;
  }

  /* Method to transform each portfolio item to a display-friendly format */
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

  /* Method to generate a random hex color code */
  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  /* Method to calculate and assign portfolio percentage and color for each item */
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

  /* Main method to process the initial data into a formatted array with additional metrics */
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
