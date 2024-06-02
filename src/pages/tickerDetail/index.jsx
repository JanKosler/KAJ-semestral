import React from 'react';
import LoadingPage from '../loading';
import { useNavigate, useParams } from 'react-router';
import { usePortfolioData } from '../../provider/PortfolioDataProvider';
import ErrorPage from '../error';
import DetailTable from '../../component/graph/DetailTable';
import { CardBase } from '../../component/card/StyledComponents';
import styled from 'styled-components';
import ButtonSimple from '../../component/button/ButtonSimple';

import { FaArrowLeft } from 'react-icons/fa';
import { useHoldings } from '../../hooks/useAddTransactionTrade';
import { useAuth } from '../../context/auth';

/**
 * The TickerDetailPage component, displays the details of a stock entry
 *
 * @returns The TickerDetailPage component
 */
const TickerDetailPage = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const { ticker } = useParams();
  const { dataProcessor, isLoading, error, refreshUserData } = usePortfolioData();

  const { deleteTransaction } = useHoldings();

  const closePosition = (transactionId) => {
    deleteTransaction(currentUser.uid, ticker, transactionId)
      .then(() => {
        refreshUserData();
        navigate(-1);
      })
      .catch(console.error);
  };

  if (isLoading || !dataProcessor) return <LoadingPage />;
  if (error) return <ErrorPage />;

  return (
    <div className="max-w-5xl mx-auto mt-5">
      <ControlsContainer>
        <ButtonSimple onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </ButtonSimple>
      </ControlsContainer>
      <CardBase>
        <h2 className="text-xl font-bold">{ticker}</h2>
      </CardBase>
      <DetailTable data={dataProcessor.getTickerDetailData(ticker)} closePosition={closePosition}></DetailTable>
    </div>
  );
};

export default TickerDetailPage;

const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 0 0.7rem 0;
`;
