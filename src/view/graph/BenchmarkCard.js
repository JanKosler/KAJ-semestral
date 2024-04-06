import React from 'react';
import styled from 'styled-components';

import { GoPlus } from "react-icons/go";

import { CardBase } from '../card/StyledComponents';

const CardContainer = styled(CardBase).attrs({})`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-radius: 8px;
`;

const BenchmarkName = styled.span.attrs({
    className: "text-gray-500",
})`
    font-size: 1.2rem;
    line-height: 1.5rem;
    margin-bottom: 8px;
`;

const Percent = styled.span`
    font-size: 24px;
`;  

const Value = styled.span`
    font-size: 16px;
`;

const BenchmarkCard = ({ benchmarkName, percentValue, value, currencyCode, blank }) => {
    if (blank) {
        return (
            <CardContainer>
                <GoPlus size={24} className="text-gray-500 " />
                <BenchmarkName>Add a benchmark</BenchmarkName>
            </CardContainer>
        );
    }
    return (
        <CardContainer>
            <BenchmarkName>{benchmarkName}</BenchmarkName>
            <Percent className={getCurrencyColor(value)}>{percentValue}%</Percent>

            <Value className={`${getCurrencyColor(value)}`}> 
                <FormatCurrency amount={value} currencyCode={currencyCode} /> 
            </Value>
        </CardContainer>
    );
};

const getCurrencyColor = (percentValue) => {
    let color = percentValue > 0 ? 'text-green-500' : 'text-red-500';
    color = percentValue === 0 ? 'text-gray-700' : color;

    return color;
};

const FormatCurrency = ({ amount, currencyCode }) => {
  // Using the Intl.NumberFormat object to format the number
  const formattedAmount = new Intl.NumberFormat('en-IE', { style: 'currency', currency: currencyCode }).format(amount);
  return formattedAmount;
};

export default BenchmarkCard;
