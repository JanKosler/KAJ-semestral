import React from 'react';

import PortfolioDataProcessor from '../graph/utils/PortfolioDataProcessor.js';
import LoadingPage from '../../pages/loading/index.js';
import LargeTable from '../graph/LargeTable.jsx';

import PortfolioPercentGraph from '../graph/PortfolioPercentGraph.jsx';

const PortfolioScreen = ({ userData }) => {
  if (!userData) return <LoadingPage />;

  const dataProcessor = new PortfolioDataProcessor(userData);
  const portfolioData = dataProcessor.processData();

  console.log(portfolioData);

  const data = portfolioData.map((item) => ({
    name: item.ticker,
    percentage: Number(item.portfolioPercent),
    color: item.color,
  }));

  console.log(data);

  return (
    <div className="max-w-5xl mx-auto mt-5">
      <LargeTable data={portfolioData}></LargeTable>

      <div className="flex space-x-4">
        <div className="flex-1">
          <PortfolioPercentGraph data={data} />
        </div>
        <div className="flex-1">
          {/* Placeholder for additional content or another component */}
          <div>Additional Content Here</div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioScreen;
