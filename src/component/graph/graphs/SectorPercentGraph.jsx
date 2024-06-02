import { ColorDot, DonutGraphCard } from './DonutGraphCard';
import { formatGICSSector, sectorColors } from '../../utils/GICSSectorUtils';

/**
 * A donut graph that shows the percentage of the portfolio that each sector makes up
 * @param {*} param0  Data from the API
 * @returns  The SectorPercentGraph component
 */
const SectorPercentGraph = ({ data }) => {
  const chartData = formatDataForChart(data);

  return (
    <DonutGraphCard name={'Sectors'} data={chartData}>
      {chartData.map((item, index) => (
        <div key={index} className="flex items-center">
          <ColorDot color={item.color}></ColorDot>
          {item.name}
        </div>
      ))}
    </DonutGraphCard>
  );
};

export default SectorPercentGraph;

/**
 * Formats the aggregated data for the donut chart
 * @param {*} aggregatedData The aggregated data
 * @param {*} totalCost The total cost of the portfolio
 * @returns {name, percentage, color}[] An array of objects with the formatted data
 */
const formatDataForChart = (data) => {
  const aggregatedData = reduceDataBySector(data);
  const totalCost = Object.values(aggregatedData).reduce((sum, sector) => sum + sector.totalCost, 0);

  return Object.keys(aggregatedData).map((key) => {
    const sector = aggregatedData[key];
    return {
      name: sector.name,
      percentage: (sector.totalCost / totalCost) * 100,
      color: sector.color,
    };
  });
};

/**
 * Reduces portfolio data by sector
 * @param {*} data The portfolio data to aggregate
 * @returns {name, totalCost, totalVolume, color}[] An array of objects with the aggregated data
 */
const reduceDataBySector = (data) => {
  return data.reduce((acc, item) => {
    if (!acc[item.sector]) {
      acc[item.sector] = {
        name: formatGICSSector(item.sector), // Format the sector name
        totalCost: 0,
        totalVolume: 0,
        color: sectorColors[item.sector] || item.color || '#ccc', // default color if sector is somehow not found
      };
    }
    acc[item.sector].totalCost += parseFloat(item.totalCost);
    acc[item.sector].totalVolume += parseFloat(item.totalVolume);
    return acc;
  }, {});
};
