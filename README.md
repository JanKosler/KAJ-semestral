# KAJ-semestral
Klientské aplikace v Javascriptu - semestrální práce 2023/2024



## JSON formats

### portfolio format example

"holdings" {
    symbol: 'NVDA', // The ticker symbol of the stock.
    name: 'Nvidia', // Plain name of the company
    currency: 'USD', // used for determining currency of the exchange at which this stock is traded -> might cause errors with some imports
    sector: 'Technology',
    transactions : [
        {
        date: "2023-01-15",
        volume: 20,
        price: 120.00,
        operation-type: "Buy"
<<<<<<< HEAD
        },
    ],
    currentShares : 50,
    averageOpenPrice : 132.00,
    currMarketPrice : 983.32,
    marketValue : 7500.00,
    grossPL : 900.00
=======
    }]
    // these are calculated beforehand and updated only if the under value changes or the change is requested -> GET current market price -> market value change
    "TotalShares": 50, // sum of shares of all transactions
    "AverageOpenPrice": 132.00, // average price of bought shares -> might not use this 
    currMarketPrice: 983.32,
    "MarketValue": 7500.00, // total 
    "UnrealizedGainLoss": 900.00
>>>>>>> bfc2f104c2c364bd5d456df4c37340d091c463c6
}
