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
    
    "CurrentShares": 50,
    "AverageOpenPrice": 132.00,
    currMarketPrice: 983.32,
    "MarketValue": 7500.00,
    "UnrealizedGainLoss": 900.00
}

