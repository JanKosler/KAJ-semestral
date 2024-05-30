import {
  FormInput,
  FormInputWithAfter,
  FormItem,
  FormLabel,
  FormMessage,
  FormSelect,
} from '../../component/form/StyledForm';

import ButtonSimple from '../../component/button/ButtonSimple';

import { useEffect, useState } from 'react';

const TransactionTradeForm = () => {
  const [tradeDate, setTradeDate] = useState('');
  const [securityID, setSecurityID] = useState('');
  const [securityIDType, setSecurityIDType] = useState('US_ticker_symbol');
  const [quantity, setQuantity] = useState(0);
  const [currencySymbol, setCurrencySymbol] = useState('USD');
  const [unitPrice, setUnitPrice] = useState(0);
  const [tradeValue, setTradeValue] = useState(0);

  useEffect(() => {
    setTradeValue(() => quantity * unitPrice);
  }, [quantity, unitPrice]);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('Submiting trade');
    console.log({
      tradeDate,
      securityID,
      securityIDType,
      quantity,
      currencySymbol,
      unitPrice,
      tradeValue,
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
        <FormLabel htmlFor="security_id">Security ID</FormLabel>
        <FormInput
          id="security_id"
          name="security_id"
          type="text"
          required
          value={securityID}
          onChange={(e) => setSecurityID(e.target.value)}
        />
      </FormItem>
      <FormItem>
        <FormLabel htmlFor="security_id_type">Security ID Type</FormLabel>
        <FormSelect
          id="security_id_type"
          name="security_id_type"
          value={securityIDType}
          onChange={(e) => setSecurityIDType(e.target.value)}
        >
          <option value="US_ticker_symbol">Ticker symbol</option>
          <option value="isin" disabled>
            ISIN (disabled)
          </option>
        </FormSelect>
        <FormMessage>Currently supporting only US registered stocks and ETFs</FormMessage>
      </FormItem>
      <FormItem>
        <FormLabel htmlFor="trade_quantity">Quantity</FormLabel>
        <FormInput
          id="trade_quantity"
          name="trade_quantity"
          type="number"
          required
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <FormMessage>Positive quantity is used as buying shares and negative for selling.</FormMessage>
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
          onChange={(e) => setUnitPrice(e.target.value)}
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
        <ButtonSimple>Add trade</ButtonSimple>
      </FormItem>
    </form>
  );
};

export default TransactionTradeForm;
