import styled from "styled-components";



    const GraphSection = styled.section`
  color: ${({ theme }) => theme.textColor};
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const TableSection = styled.section`
  overflow-x: auto;
  border-collapse: collapse;
  width: 100%;
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  text-align: left; /* Ensure consistent left alignment */
`;

const TableHead = styled.thead`
  background-color: ${({ theme }) => theme.tableHeaderBg};
  color: ${({ theme }) => theme.tableHeaderColor};
  font-weight: bold;
  text-transform: uppercase;
`;

const TableRow = styled.tr`
  background-color: ${({ theme, even }) =>
    even ? theme.tableRowEvenBg : theme.tableRowOddBg};
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.tableRowEvenBg};
  }
  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.tableRowOddBg};
  }
`;

const TableHeader = styled.th`
  padding: 0.5rem 1rem;
`;

const TableCell = styled.td`
  padding: 0.5rem 1rem;
`;

// Sample data (replace with your actual data)
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

// Define the React component with styled-components
const LargeGraph = () => {
  const theme = {
    textColor: '#333', // Replace with your desired text color
    tableHeaderBg: '#f2f2f2',
    tableHeaderColor: '#333',
    tableRowEvenBg: '#fff',
    tableRowOddBg: '#f5f5f5',
  };

  return (
    <>
      <GraphSection>Hello World</GraphSection>
      <TableSection>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader scope="col">Name</TableHeader>
              <TableHeader scope="col">Ticker</TableHeader>
              <TableHeader scope="col">Open Price</TableHeader>
              <TableHeader scope="col">Volume</TableHeader>
              <TableHeader scope="col">Market Price</TableHeader>
              <TableHeader scope="col">Gross P/L</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            {data.map((item, index) => (
              <TableRow key={index} even={index % 2 === 0}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.ticker}</TableCell>
                <TableCell>{item.openPrice}</TableCell>
                <TableCell>{item.volume}</TableCell>
                <TableCell>{item.marketPrice}</TableCell>
                <TableCell>{item.grossPL}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableSection>
    </>
  );
};
  /*const GraphSection = styled.section`
    width: 100%;
    height: 300px;
    background-color: #f0f0f0;
  `;
  const TableSection = styled.section`
    width: 100%;
    height: 300px;
  `;
  const Table = styled.table`
    @apply w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400;
  `;
  const TableHead = styled.thead`
    @apply text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400;
  `;
  const TableHeader = styled.th`
    @apply px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white;
    width: calc(100% / 6);
  `;

  const TableCell = styled.td`
    @apply px-6;
    width: calc(100% / 6);
  `;

  return (
    <>
      <GraphSection>Hello Worlds</GraphSection>
      <TableSection>
        <Table>
          <TableHead>
            <tr>
              <TableHeader scope="col">
                Name
              </TableHeader>
              <TableHeader scope="col">
                Ticker
              </TableHeader>
              <TableHeader scope="col">
                Open Price
              </TableHeader>
              <TableHeader scope="col">
                Volume
              </TableHeader>
              <TableHeader scope="col">
                Market Price
              </TableHeader>
              <TableHeader scope="col">
                Gross P/L
              </TableHeader>
            </tr>
          </TableHead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <TableHeader
                scope="row"
              >
                Nvidia
              </TableHeader>
              <TableCell>NVDA.US</TableCell>
              <TableCell>934.23</TableCell>
              <TableCell>8</TableCell>
              <TableCell>983.32</TableCell>
              <TableCell>23234</TableCell>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <TableHeader
                scope="row"
              >
                Apple
              </TableHeader>
              <TableCell>INTC.US</TableCell>
              <TableCell>43.45 PC</TableCell>
              <TableCell>45</TableCell>
              <TableCell>60.32</TableCell>
              <TableCell>2323</TableCell>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <TableHeader
                scope="row"
              >
                Intel
              </TableHeader>
              <TableCell>AAPL.US</TableCell>
              <TableCell>171.23</TableCell>
              <TableCell>4</TableCell>
              <TableCell>190.23</TableCell>
              <TableCell>-123213</TableCell>
            </tr>
          </tbody>
        </Table>
      </TableSection>
    </>
  );
  */


export default LargeGraph;
