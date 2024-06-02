import { CardBase } from '../../card/StyledComponents';
import DonutChart from '../utils/DonutChart';

import styled from 'styled-components';

/**
 * A card that contains a donut graph and additional content
 * @returns  The DonutGraphCard component
 * @param {*} name The name of the card (currently not used)
 * @param {*} data The data for the donut graph
 * @param {*} children The additional content
 */
export const DonutGraphCard = ({ name, data, children }) => {
  return (
    <CardBase>
      <CardContainer>
        <ChartSection>
          <DonutChart data={data} />
        </ChartSection>
        <ContentSection>{children}</ContentSection>
      </CardContainer>
    </CardBase>
  );
};

const CardContainer = styled.div.attrs({
  className:
    'flex flex-col sm:flex-row md:flex-row lg:flex-row space-y-4 sm:space-y-0 sm:space-x-4 md:space-y-0 md:space-x-4 lg:space-y-0 lg:space-x-4 m-auto',
})``;

const ChartSection = styled.div.attrs({
  className: 'flex-1 self-center',
})``;

const ContentSection = styled.div.attrs({
  className: 'flex-1 self-center',
})``;

export const ColorDot = styled.span.attrs({
  className: 'w-4 h-4 rounded-full mr-2',
})`
  background-color: ${(props) => props.color};
`;
