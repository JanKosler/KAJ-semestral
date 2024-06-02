import Card from './Card';
import '../button/button.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InfoCard = ({ title, href, children }) => {
  return (
    <Card href={href}>
      <div className="w-full p-1 flex flex-wrap">
        <div className="w-full flex justify-between">
          <span className="text-sm font-medium text-gray-500 justify-start">{title.toUpperCase()}</span>
          <span className="inline-flex items-center justify-center w-6 h-6 text-xs text-gray-600 rounded-full border-gray-600 arrowIconBorder">
            <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
          </span>
        </div>
        {children}
        <div className="w-full flex justify-start items-center mt-6">
          <div className="text-2xl font-bold text-green-600">172 391 Kč</div>
        </div>
      </div>
    </Card>
  );
};

export default InfoCard;
