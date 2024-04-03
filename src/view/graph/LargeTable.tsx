import React from 'react';
import styled from 'styled-components';

// Assuming global styles or an imported CSS file handles Tailwind directives

const Table = styled.table.attrs({
    className: "w-full text-sm text-left text-gray-500",
})``;

const Thead = styled.thead.attrs({
    className: "text-xs text-gray-700 uppercase bg-gray-50",
})``;

const Tbody = styled.tbody.attrs({
    className: "bg-white",
})``;

const Tr = styled.tr.attrs({
    className: `border-b bg-white`,
})``;

const Th = styled.th.attrs({
    className: "px-6 py-3",
})``;

const Td = styled.td.attrs({
    className: "px-6 py-4",
})``;

const ProductName = styled.th.attrs({
    className: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",
})``;

interface HoldingsItem {
    name: string;
    ticker: string;
    openPrice: string;
    volume: number;
    marketPrice: string;
    grossPL: string;
}

interface LargeTableProps {
    data: HoldingsItem[];
}

const LargeTable: React.FC<LargeTableProps> = ({ data }) => (
    <Table>
        <Thead>
            <Tr>
                <Th>Name</Th>
                <Th>Ticker</Th>
                <Th>Open price</Th>
                <Th>Volume</Th>
                <Th>Market price</Th>
                <Th>gross P/L</Th>

            </Tr>
        </Thead>
        <Tbody>
            {data.map((item, index) => (
                <Tr key={index} >
                    <ProductName>{item.name}</ProductName>
                    <Td>{item.ticker}</Td>
                    <Td>{item.openPrice}</Td>
                    <Td>{item.volume}</Td>
                    <Td>{item.marketPrice}</Td>
                    <Td>{item.grossPL}</Td>
                </Tr>
            ))}
        </Tbody>
    </Table>
);


export default LargeTable;
