import { ColorDot, DonutGraphCard } from './DonutGraphCard';

/**
 * This component displays a donut graph of stock titles with the percentage of the portfolio
 * @returns  The PorfolioPercentGraph component
 * @param {*} data data from the API
 * @returns  The PorfolioPercentGraph component
 */
const PorfolioPercentGraph = ({ data }) => {
  const processedData = formatDataForChart(data);

  return (
    <DonutGraphCard name={'Portfolio by title'} data={processedData}>
      {processedData.map((item, index) => (
        <div key={index} className="flex items-center">
          <ColorDot color={item.color}></ColorDot>
          <span>
            {item.name}
            <span className="text-gray-500"> - {item.percentage} %</span>
          </span>
        </div>
      ))}
    </DonutGraphCard>
  );
};

export default PorfolioPercentGraph;

const formatDataForChart = (data) => {
  return data.map((item) => ({
    name: item.ticker,
    percentage: Number(item.portfolioPercent),
    color: item.color,
  }));
};
