import React from 'react';
import LargeTable from '../graph/LargeTable.js';

import data from '../../data/example/portfolio.json';
import SectorGraph from '../graph/SectorGraph.js';
import SectionBenchmark from '../graph/SectionBenchmark.js';

const portfolio = data.holdings;

const PortfolioScreen = () => {
    const ndata = portfolio.map(transformPortfolioToDisplayFormat);

    const wholePortfolioValue = ndata.reduce((acc, item) => acc + (item.volume * item.marketPrice), 0);
    const nndata = ndata.map(item => addPortfolioPercent(item, wholePortfolioValue));

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

const transformPortfolioToDisplayFormat = (portfolioItem) => {
    const totalVolume = portfolioItem.transactions.reduce((acc, transaction) => acc + transaction.volume, 0);
    const totalCost = portfolioItem.transactions.reduce((acc, transaction) => acc + (transaction.price * transaction.volume), 0);
    const averageOpenPrice = totalCost / totalVolume;
    const grossPL = (portfolioItem.currMarketPrice - averageOpenPrice) * totalVolume;

    return {
        name: portfolioItem.name,
        ticker: portfolioItem.symbol,
        sector: portfolioItem.sector,
        currency: portfolioItem.currency,
        openPrice: averageOpenPrice.toFixed(2),
        volume: totalVolume,
        marketPrice: portfolioItem.currMarketPrice.toFixed(2),
        grossPL: grossPL.toFixed(2), 
    };
}

const addPortfolioPercent = (portfolioItem, wholePortfolioValue) => {
    console.log(wholePortfolioValue);
    const percent = ((portfolioItem.volume * portfolioItem.marketPrice) / wholePortfolioValue) * 100;
    console.log(percent);   
    return {
        ...portfolioItem,
        portfolioPercent: percent.toFixed(2),
    };
    
};