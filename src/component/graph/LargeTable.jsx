import React from 'react';
import styled from 'styled-components';

import { CardBase, SectionBase } from '../card/StyledComponents';
// Assuming global styles or an imported CSS file handles Tailwind directives

import { GetValueColor, FormatCurrency } from '../utils/Utils.js';

const LargeTable = ({ data }) => {
  console.log(data);
  return (
    <CardContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>Ticker symbol</Th>
            <Th>Sector</Th>
            <Th>Avg. Open price</Th>
            <Th>Total Volume</Th>
            <Th>Market price</Th>
            <Th>Portfolio percent</Th>
            {/* TODO LATER
            <Th>Net profit/loss</Th>
            <Th>%</Th>
            */}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, index) => (
            <Tr key={index}>
              <TickerSymbol>{item.ticker}</TickerSymbol>
              <Td>{formatGICSSector(item.sector)}</Td>
              <Td>{FormatCurrency(item.openPrice, 'USD')}</Td>
              <Td>{item.totalVolume}</Td>
              <Td>{FormatCurrency(item.marketPrice, 'USD')}</Td>
              <Td>{item.portfolioPercent + ' %'}</Td>
              {/*  TODO LATER
              <Td className={GetValueColor(item.grossPL)}>{FormatCurrency(item.grossPL, item.currency)}</Td>
              <Td>{item.portfolioPercent} %</Td>
              */}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </CardContainer>
  );
};

export default LargeTable;

const CardContainer = styled(CardBase).attrs({})`
  margin: 2rem 0 !important;
`;

const Table = styled.table.attrs({
  className: 'w-full text-sm text-left text-gray-500',
})``;

const Thead = styled.thead.attrs({
  className: 'text-xs text-gray-700 uppercase',
})``;

const Tbody = styled.tbody.attrs({
  className: 'bg-transparent',
})``;

const Tr = styled.tr.attrs({
  className: `border-b bg-transparent`,
})``;

const Th = styled.th.attrs({
  className: 'px-6 py-3',
})`
  @media (max-width: 768px) {
    &:not(:nth-child(1)):not(:nth-child(3)):not(:nth-child(5)) {
      display: none;
    }
  }
`;

const Td = styled.td.attrs({
  className: 'px-6 py-4',
})`
  @media (max-width: 768px) {
    &:not(:nth-child(1)):not(:nth-child(3)):not(:nth-child(5)) {
      display: none;
    }
  }
`;

const TickerSymbol = styled.th.attrs({
  className: 'px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white',
})``;

function formatGICSSector(sector) {
  const sectorNames = {
    energy: 'Energy',
    materials: 'Materials',
    industrials: 'Industrials',
    'consumer-discretionary': 'Consumer Discretionary',
    'consumer-staples': 'Consumer Staples',
    'health-care': 'Health Care',
    financials: 'Financials',
    'information-technology': 'Information Technology',
    'communication-services': 'Communication Services',
    utilities: 'Utilities',
    'real-estate': 'Real Estate',
  };

  return sectorNames[sector] || 'Unknown Sector';
}
