import React from 'react';
import styled from 'styled-components';

import { CardBase } from '../card/StyledComponents';
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
      <Table>
        <Thead>
          <Tr>
            <Th abbr="ticker">Ticker symbol</Th>
            <Th abbr="sector">Sector</Th>
            <Th abbr="avgOpen">Avg. Open price</Th>
            <Th abbr="totalVol">Total Volume</Th>
            <Th abbr="mPrice">Market price</Th>
            <Th abbr="pPercent">Portfolio percent</Th>
            {/* TODO 
            <Th abbr="nProfit">Net profit/loss</Th>
            */}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, index) => (
            <Tr key={index} $hover={true} onClick={() => handleRowClick(item.ticker)}>
              <TickerSymbol abbr="ticker">{item.ticker}</TickerSymbol>
              <Td abbr="sector">{formatGICSSector(item.sector)}</Td>
              <Td abbr="avgOpen">{FormatCurrency(item.openPrice, 'USD')}</Td>
              <Td abbr="totalVol">{item.totalVolume}</Td>
              <Td abbr="mPrice">{/*FormatCurrency(item.marketPrice, 'USD')*/ 'Coming soon...'}</Td>
              <Td abbr="pPercent">{item.portfolioPercent + ' %'}</Td>
              {/*  TODO 
              <Td abbr="nProfit" className={GetValueColor(item.grossPL)}>{FormatCurrency(item.grossPL, item.currency)}</Td>
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
})`
  cursor: ${({ $hover }) => ($hover ? 'pointer' : 'auto')};
  &:hover {
    background-color: ${({ $hover }) => ($hover ? '#eee' : 'transparent')};
  }
`;

const Th = styled.th.attrs({
  className: 'px-6 py-3',
})`
  @media (max-width: 768px) {
    &[abbr]:not([abbr='ticker']):not([abbr='avgOpen']):not([abbr='totalVol']) {
      display: none;
    }
  }
`;

const Td = styled.td.attrs({
  className: 'px-6 py-4',
})`
  @media (max-width: 768px) {
    &[abbr]:not([abbr='ticker']):not([abbr='avgOpen']):not([abbr='totalVol']) {
      display: none;
    }
  }
`;

const TickerSymbol = styled.th.attrs({
  className: 'px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white',
})``;
