import React from 'react';
import LargeTable from '../graph/LargeTable.js';

import data from '../../data/example/portfolio.json';
import SectorGraph from '../graph/SectorGraph.js';
import SectionBenchmark from '../graph/SectionBenchmark.js';

const holdings = data.holdings;

const transformHoldingToHoldingsItem = (holding) => {
    const totalVolume = holding.transactions.reduce((acc, transaction) => acc + transaction.volume, 0);
    const totalCost = holding.transactions.reduce((acc, transaction) => acc + (transaction.price * transaction.volume), 0);
    const averageOpenPrice = totalCost / totalVolume;
    const grossPL = (holding.currMarketPrice - averageOpenPrice) * totalVolume;

    return {
        name: holding.name,
        ticker: holding.symbol,
        sector: holding.sector,
        openPrice: averageOpenPrice.toFixed(2),
        volume: totalVolume,
        marketPrice: holding.currMarketPrice.toFixed(2),
        grossPL: grossPL.toFixed(2),
    };
}


const PortfolioScreen = () => {
    const nndata = holdings.map(transformHoldingToHoldingsItem);

    return (
        <div className='max-w-5xl mx-auto mt-5'>
          <LargeTable data={nndata}>

          </LargeTable>
          <SectorGraph data={nndata}>

          </SectorGraph>
          <SectionBenchmark>

          </SectionBenchmark>
        </div>
    );
};

export default PortfolioScreen;