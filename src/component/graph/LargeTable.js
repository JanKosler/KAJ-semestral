import React from 'react';
import styled from 'styled-components';

import { CardBase, SectionBase } from '../card/StyledComponents.js';
// Assuming global styles or an imported CSS file handles Tailwind directives

import { GetValueColor, FormatCurrency } from '../utils/Utils.js';

const LargeTable = ({ data }) => {
  return (
    <CardContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Ticker</Th>
            <Th>Open price</Th>
            <Th>Volume</Th>
            <Th>Market price</Th>
            <Th>Net profit/loss</Th>
            <Th>%</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, index) => (
            <Tr key={index}>
              <ProductName>{item.name}</ProductName>
              <Td>{item.ticker}</Td>
              <Td>{FormatCurrency(item.openPrice, item.currency)}</Td>
              <Td>{item.volume}</Td>
              <Td>{FormatCurrency(item.marketPrice, item.currency)}</Td>
              <Td className={GetValueColor(item.grossPL)}>{FormatCurrency(item.grossPL, item.currency)}</Td>
              <Td>{item.portfolioPercent} %</Td>
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
})``;

const Td = styled.td.attrs({
  className: 'px-6 py-4',
})``;

const ProductName = styled.th.attrs({
  className: 'px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white',
})``;
