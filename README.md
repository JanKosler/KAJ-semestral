# KAJ-semestral
Klientské aplikace v Javascriptu - semestrální práce 2023/2024



## JSON formats

### portfolio format example

"holdings" {
    symbol: 'NVDA', // The ticker symbol of the stock.
    name: 'Nvidia', // Plain name of the company
    currency: 'USD', // used for determining currency of the exchange at which this stock is traded -> might cause errors with some imports
    sector: 'Technology',
    transactions : [{
        date: "2023-01-15",
        volume: 20,
        price: 120.00,
        operation-type: "Buy"
    }]
    // these are calculated beforehand and updated only if the under value changes or the change is requested -> GET current market price -> market value change
    "TotalShares": 50, // sum of shares of all transactions
    "AverageOpenPrice": 132.00, // average price of bought shares -> might not use this 
    currMarketPrice: 983.32,
    "MarketValue": 7500.00, // total 
    "UnrealizedGainLoss": 900.00
}

