import React from 'react';
import styled from 'styled-components';

import { SectionBase } from '../card/StyledComponents';
import BenchmarkCard from './BenchmarkCard';

const SectionGrid = styled(SectionBase).attrs({})`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
`;

const SectionBenchmark = ({ benchmarkData }) => (
    <SectionGrid>
        <BenchmarkCard 
            benchmarkName="Price return"
            percentValue={8.64}
            value={1111.34}
            currencyCode="USD"
        />
        <BenchmarkCard 
            benchmarkName="Income return"
            percentValue={18.32}
            value={1432.34}
            currencyCode="USD"
        />
        <BenchmarkCard
            benchmarkName="Cost ratio"
            percentValue={-10}
            value={-50.3435}
            currencyCode="USD"
        />
        <BenchmarkCard 
            blank={true}
        />
    </SectionGrid>
);


export default SectionBenchmark;