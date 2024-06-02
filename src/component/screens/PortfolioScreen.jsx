import React from 'react';

import LoadingPage from '../../pages/loading/index.js';
import LargeTable from '../graph/LargeTable.jsx';

import PortfolioPercentGraph from '../graph/graphs/PortfolioPercentGraph.jsx';
import SectorPercentGraph from '../graph/graphs/SectorPercentGraph.jsx';

/**
 * The main portfolio screen component
 * @param {*} processedData The data from the API
 * @param {PortfolioDataProcessor} dataProcessor The data processor
 * @returns The PortfolioScreen component
 */
const PortfolioScreen = ({ processedData, dataProcessor }) => {
  if (!processedData || !dataProcessor) return <LoadingPage />;

  return (
    <div className="max-w-5xl mx-auto mt-5">
      <LargeTable data={processedData}></LargeTable>

      <div className="flex space-x-4">
        <div className="flex-1">
          <PortfolioPercentGraph data={processedData} />
        </div>
        <div className="flex-1">
          <SectorPercentGraph data={processedData} />
        </div>
      </div>
    </div>
  );
};

export default PortfolioScreen;
