import React from 'react';
import styled from 'styled-components';

import { CardBase } from '../card/StyledCard.jsx';
// Assuming global styles or an imported CSS file handles Tailwind directives

import { FormatCurrency } from '../utils/Utils.js';
import { formatGICSSector } from '../utils/GICSSectorUtils.js';
import { useNavigate } from 'react-router-dom';

/**
 * Main table component for displaying a large table of data
 * @param {*} param0 Data from the API
 * @returns The LargeTable component
 */
const LargeTable = ({ data }) => {
  const navigate = useNavigate();

  const handleRowClick = (ticker) => {
    if (!ticker) {
      console.error('Worker ID is not defined');
      return;
    }
    navigate(`/detail/${ticker}`);
  };

  return (
    <CardContainer>
      <h2>Portfolio</h2>
      <Table>
        <Thead>
          <Tr>
            <Th>Ticker symbol</Th>
            <Th>Sector</Th>
            <Th>Avg. Open price</Th>
            <Th>Total Volume</Th>
            <Th>Market price</Th>
            <Th>Portfolio percent</Th>
            {/* TODO 
            <Th abbr="nProfit">Net profit/loss</Th>
            */}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, index) => (
            <HoverTr key={index} onClick={() => handleRowClick(item.ticker)}>
              <TickerSymbol>{item.ticker}</TickerSymbol>
              <Td>{formatGICSSector(item.sector)}</Td>
              <Td>{FormatCurrency(item.openPrice, 'USD')}</Td>
              <Td>{item.totalVolume}</Td>
              <Td>{/*FormatCurrency(item.marketPrice, 'USD')*/ 'Coming soon...'}</Td>
              <Td>{item.portfolioPercent + ' %'}</Td>
              {/*  TODO 
              <Td abbr="nProfit" className={GetValueColor(item.grossPL)}>{FormatCurrency(item.grossPL, item.currency)}</Td>
              */}
            </HoverTr>
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

const Th = styled.th.attrs({
  className: 'px-6 py-3',
})`
  @media (max-width: 768px) {
    &[abbr]:not(:nth-child(1)):not(:nth-child(3)):not(:nth-child(5)) {
      display: none;
    }
  }
`;

const Td = styled.td.attrs({
  className: 'px-6 py-4',
})`
  @media (max-width: 768px) {
    &[abbr]:not(:nth-child(1)):not(:nth-child(3)):not(:nth-child(5)) {
      display: none;
    }
  }
`;

const TickerSymbol = styled.th.attrs({
  className: 'px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white',
})``;

const Tr = styled.tr.attrs({
  className: `border-b bg-transparent`,
})``;

const HoverTr = styled(Tr)`
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
`;
