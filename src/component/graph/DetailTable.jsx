import React from 'react';
import styled from 'styled-components';

import { CardBase } from '../card/StyledComponents';
import ButtonSimple from '../button/ButtonSimple';

/**
 * A table component for displaying open positions
 * @param {*} param0  The data for the table
 * @returns        The DetailTable component
 */
const DetailTable = ({ data, closePosition }) => {
  return (
    <CardContainer>
      <h3>Open positions</h3>
      <hr />
      <Table>
        <Thead>
          <Tr>
            <Th abbr="date">Date</Th>
            <Th abbr="pricePerUnit">Open price</Th>
            <Th abbr="quantity">Volume</Th>
            <Th abbr="totalPrice">Total Price</Th>
            <Th abbr="operationType">Type</Th>
            <Th abbr="closePosition">Close Position</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.transactions.map((item, index) => (
            <Tr key={index}>
              <TickerSymbol abbr="date">{item.date}</TickerSymbol>
              <Td abbr="pricePerUnit">{item.pricePerUnit}</Td>
              <Td abbr="quantity">{item.quantity}</Td>
              <Td abbr="totalPrice">{item.tradeValue}</Td>
              <Td abbr="operationType">{item.operationType}</Td>
              <Td abbr="closePosition">
                <ButtonSimple onClick={() => closePosition(item.id)}>Close</ButtonSimple>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </CardContainer>
  );
};

export default DetailTable;

const CardContainer = styled(CardBase).attrs({})`
  margin: 2rem 0 !important;

  h3 {
    margin-left: 0;
    text-align: left;
    color: #333;
    font-size: 1.5rem;
  }
  hr {
    padding-bottom: 1.5rem;
  }
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
    &[abbr]:not([abbr='date']):not([abbr='pricePerUnit']):not([abbr='quantity']):not([abbr='closePosition']) {
      display: none;
    }
  }
`;

const Td = styled.td.attrs({
  className: 'px-6 py-4',
})`
  @media (max-width: 768px) {
    &[abbr]:not([abbr='date']):not([abbr='pricePerUnit']):not([abbr='quantity']):not([abbr='closePosition']) {
      display: none;
    }
  }
`;

const TickerSymbol = styled.th.attrs({
  className: 'px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white',
})``;
