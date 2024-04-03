import React from 'react';
import LargeTable from '../graph/LargeTable.tsx';

const PortfolioScreen = () => {
    const data = [
        {
            name: 'Nvidia',
            ticker: 'NVDA.US',
            openPrice: 934.23,
            volume: 8,
            marketPrice: 983.32,
            grossPL: 23234,
        },
        {
            name: 'Apple',
            ticker: 'INTC.US',
            openPrice: 43.45,
            volume: 45,
            marketPrice: 60.32,
            grossPL: 2323,
        },
        {
            name: 'Intel',
            ticker: 'AAPL.US',
            openPrice: 171.23,
            volume: 4,
            marketPrice: 190.23,
            grossPL: -123213,
        },
    ];

    return (
        <LargeTable data={data}>

        </LargeTable>
    );
};

export default PortfolioScreen;