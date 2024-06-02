import React from 'react';
import styled from 'styled-components';

import { CardBase } from '../card/StyledCard';
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
            <Th>Date</Th>
            <Th>Open price</Th>
            <Th>Volume</Th>
            <Th>Total Price</Th>
            <Th>Close Position</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.transactions.map((item, index) => (
            <Tr key={index}>
              <TickerSymbol>{item.date}</TickerSymbol>
              <Td>{Number(item.pricePerUnit).toFixed(2)}</Td>
              <Td>{item.quantity}</Td>
              <Td>{Number(item.tradeValue).toFixed(2)}</Td>
              <Td>
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

const CardContainer = styled(CardBase)`
  margin: 2rem 0 !important;

  h3 {
    margin-left: 0;
    text-align: left;
    color: #333;
    font-size: 1.5rem;
    -webkit-text-align: left;
    -moz-text-align: left;
  }

  hr {
    padding-bottom: 1.5rem;
    -webkit-padding-bottom: 1.5rem;
    -moz-padding-bottom: 1.5rem;
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

const Th = styled.th.attrs({
  className: 'px-6 py-3',
})`
  @media (max-width: 768px) {
    &:not(:nth-child(1)):not(:nth-child(2)):not(:nth-child(3)):not(:nth-child(5)) {
      display: none;
    }
  }
`;

const Tr = styled.tr.attrs({
  className: `border-b bg-transparent`,
})``;

const Td = styled.td.attrs({
  className: 'px-6 py-4',
})`
  @media (max-width: 768px) {
    &:not(:nth-child(1)):not(:nth-child(2)):not(:nth-child(3)):not(:nth-child(5)) {
      display: none;
    }
  }
`;

const TickerSymbol = styled.th.attrs({
  className: 'px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white',
})``;
