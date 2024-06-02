import { CardBase } from '../card/StyledComponents';
import DonutChart from './utils/DonutChart';

const PorfolioPercentGraph = ({ data }) => {
  return (
    <CardBase>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 md:space-y-0 md:space-x-4 m-auto">
        <div className="flex-1 self-center">
          <DonutChart data={data} />
        </div>
        <div className="flex-1 self-center">
          {data.map((item, index) => (
            <div key={index} className="flex items-center">
              <div
                className="w-4 h-4 rounded-full mr-2"
                style={{
                  backgroundColor: item.color,
                }}
              ></div>
              <div>
                {item.name} - {item.percentage} %
              </div>
            </div>
          ))}
        </div>
      </div>
    </CardBase>
  );
};

export default PorfolioPercentGraph;
