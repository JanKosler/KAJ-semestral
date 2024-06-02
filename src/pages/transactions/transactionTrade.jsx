import {
  ErrorMessage,
  FormInput,
  FormInputWithAfter,
  FormItem,
  FormLabel,
  FormMessage,
  FormSelect,
} from '../../component/form/StyledForm';

import ButtonSimple from '../../component/button/ButtonSimple';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useHoldings } from '../../hooks/useAddTransactionTrade';
import { useAuth } from '../../context/auth';
import { usePortfolioData } from '../../provider/PortfolioDataProvider';

/**
 * Transaction trade form component
 * @returns The TransactionTradeForm component
 */
const TransactionTradeForm = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const { refreshUserData } = usePortfolioData();

  const [tradeDate, setTradeDate] = useState('');
  const [tickerSymbol, setTickerSymbol] = useState('');
  const [sector, setSector] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [currencySymbol, setCurrencySymbol] = useState('USD');
  const [unitPrice, setUnitPrice] = useState(0);
  const [tradeValue, setTradeValue] = useState(0);
  const [error, setError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const { addOrUpdateHolding } = useHoldings();

  useEffect(() => {
    setTradeValue(() => quantity * unitPrice);
    setIsFormValid(quantity > 0 && unitPrice > 0);
  }, [quantity, unitPrice]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) {
      setError('Quantity and price must be greater than zero.');
      return;
    }
    console.log('Submitting trade');
    const newHolding = {
      symbol: tickerSymbol,
      name: '',
      currency: 'USD',
      sector: sector,
      transaction: {
        date: tradeDate,
        quantity: quantity,
        pricePerUnit: unitPrice,
        tradeValue: tradeValue.toFixed(2),
        operationType: quantity > 0 ? 'BUY' : 'SELL',
      },
    };

    addOrUpdateHolding(currentUser.uid, newHolding)
      .then(() => {
        console.log('Trade successfully added.');
        refreshUserData();
        navigate('/'); // Navigate to the homepage on successful addition
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <form onSubmit={onSubmit}>
      <FormItem>
        <FormLabel htmlFor="trade_date">Date</FormLabel>
        <FormInput
          id="trade_date"
          name="trade_date"
          type="date"
          required
          value={tradeDate}
          onChange={(e) => setTradeDate(e.target.value)}
        />
      </FormItem>
      <FormItem>
        <FormLabel htmlFor="ticker">Ticker symbol</FormLabel>
        <FormInput
          id="ticker"
          name="ticker"
          type="text"
          required
          value={tickerSymbol}
          onChange={(e) => setTickerSymbol(e.target.value)}
        />
      </FormItem>
      <FormItem>
        <FormLabel htmlFor="sector">GICS Sector</FormLabel>
        <FormSelect
          id="sector"
          name="sector"
          type="text"
          required
          value={sector}
          onChange={(e) => setSector(e.target.value)}
        >
          <option value="energy">Energy</option>
          <option value="materials">Materials</option>
          <option value="industrials">Industrials</option>
          <option value="consumer-discretionary">Consumer Discretionary</option>
          <option value="consumer-staples">Consumer Staples</option>
          <option value="health-care">Health Care</option>
          <option value="financials">Financials</option>
          <option value="information-technology">Information Technology</option>
          <option value="communication-services">Communication Services</option>
          <option value="utilities">Utilities</option>
          <option value="real-estate">Real Estate</option>
        </FormSelect>
      </FormItem>
      <FormItem>
        <FormLabel htmlFor="trade_quantity">Quantity</FormLabel>
        <FormInput
          id="trade_quantity"
          name="trade_quantity"
          type="number"
          required
          value={quantity}
          onChange={(e) => setQuantity(Math.max(0, parseFloat(e.target.value)))}
        />
        <FormMessage>Positive quantity is used for buying shares and negative for selling.</FormMessage>
      </FormItem>
      <FormItem>
        <FormLabel htmlFor="currency_symbol">Currency Symbol</FormLabel>
        <FormSelect
          id="currency_symbol"
          name="currency_symbol"
          type="text"
          required
          value={currencySymbol}
          onChange={(e) => setCurrencySymbol(e.target.value)}
        >
          <option value="EUR" disabled>
            EUR (disabled)
          </option>
          <option value="USD">USD</option>
        </FormSelect>
      </FormItem>
      <FormItem>
        <FormLabel htmlFor="unit_price">Price per unit</FormLabel>
        <FormInputWithAfter
          id="unit_price"
          name="unit_price"
          type="number"
          required
          value={unitPrice}
          onChange={(e) => setUnitPrice(Math.max(0, parseFloat(e.target.value)))}
          afterContent={currencySymbol}
        />
      </FormItem>
      <FormItem>
        <FormLabel htmlFor="trade_value">Trade value</FormLabel>
        <FormInputWithAfter
          id="trade_value"
          name="trade_value"
          type="text"
          disabled={true}
          value={tradeValue.toFixed(2)}
          afterContent={currencySymbol}
        />
      </FormItem>
      <FormItem>
        <ButtonSimple disabled={!isFormValid}>Add trade</ButtonSimple>
      </FormItem>
      <ErrorMessage>{error}</ErrorMessage>
    </form>
  );
};

export default TransactionTradeForm;
