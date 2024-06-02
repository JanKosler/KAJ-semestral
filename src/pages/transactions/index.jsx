import styled from 'styled-components';
import { FormContainer, FormHeader, FormLabel, FormSelect } from '../../component/form/StyledForm';
import TransactionDepositWithdrawalForm from './transactionDepositWithdraw';
import TransactionTradeForm from './transactionTrade';
import { useState } from 'react';

/**
 * Form for adding funds or stock to the porfolio manager
 */
const AddTransactionPage = () => {
  const [transactionType, setTransactionType] = useState('trade');

  const handleChange = (event) => {
    // Update state with the selected option
    setTransactionType(event.target.value);
  };

  return (
    <PageContainer>
      <FormContainer>
        <FormHeader>Add Transaction</FormHeader>
        <hr />
        <FormLabel htmlFor="transaction-type">Name</FormLabel>
        <FormSelect id="transaction-type" name="transaction-type" value={transactionType} onChange={handleChange}>
          <option value="deposit">Deposit/Withdrawal</option>
          <option value="trade">Trade</option>
        </FormSelect>

        {transactionType === 'deposit' ? <TransactionDepositWithdrawalForm /> : <TransactionTradeForm />}
      </FormContainer>
    </PageContainer>
  );
};

export default AddTransactionPage;

const PageContainer = styled.div.attrs({
  className: 'w-full h-screen flex self-center place-content-center place-items-center',
})``;
